using BurgerShop.API.Data;
using BurgerShop.API.DTOs.Orders;
using BurgerShop.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BurgerShop.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _context.Orders
        .Include(o => o.Items)
        .ThenInclude(i => i.Product)
        .ToListAsync();

            var response = orders.Select(order => new OrderResponseDto
            {
                Id = order.Id,
                OrderNumber = order.OrderNumber,
                TotalPrice = order.TotalPrice,
                Status = order.Status.ToString(),
                CreatedAt = order.CreatedAt,
                Items = order.Items.Select(item => new OrderItemResponseDto
                {
                    ProductId = item.ProductId,
                    ProductName = item.Product.Name,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    TotalPrice = item.UnitPrice * item.Quantity
                }).ToList()
            }).ToList();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _context.Orders
       .Include(o => o.Items)
       .ThenInclude(i => i.Product)
       .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            var response = new OrderResponseDto
            {
                Id = order.Id,
                OrderNumber = order.OrderNumber,
                TotalPrice = order.TotalPrice,
                Status = order.Status.ToString(),
                CreatedAt = order.CreatedAt,
                Items = order.Items.Select(item => new OrderItemResponseDto
                {
                    ProductId = item.ProductId,
                    ProductName = item.Product.Name,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    TotalPrice = item.UnitPrice * item.Quantity
                }).ToList()
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(CreateOrderDto dto)
        {
            var order = new Order
            {
                OrderNumber = $"ORD-{DateTime.Now:yyyyMMddHHmmss}",
                Status = OrderStatus.PendingPayment,
                CreatedAt = DateTime.Now
            };

            decimal totalPrice = 0;

            foreach (var item in dto.Items)
            {
                var product = await _context.Products.FindAsync(item.ProductId);

                if (product == null)
                {
                    return BadRequest($"Product with id {item.ProductId} does not exist.");
                }

                if (!product.IsAvailable)
                {
                    return BadRequest($"Product '{product.Name}' is not available.");
                }

                var orderItem = new OrderItem
                {
                    ProductId = product.Id,
                    Quantity = item.Quantity,
                    UnitPrice = product.Price
                };

                totalPrice += product.Price * item.Quantity;

                order.Items.Add(orderItem);
            }

            order.TotalPrice = totalPrice;

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            var response = new OrderResponseDto
            {
                Id = order.Id,
                OrderNumber = order.OrderNumber,
                TotalPrice = order.TotalPrice,
                Status = order.Status.ToString(),
                CreatedAt = order.CreatedAt,
                Items = order.Items.Select(item => new OrderItemResponseDto
                {
                    ProductId = item.ProductId,
                    ProductName = item.Product.Name,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    TotalPrice = item.UnitPrice * item.Quantity
                }).ToList()
            };

            return CreatedAtAction(
                nameof(GetOrder),
                new { id = order.Id },
                response
            );
        }

        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] string status)
        {
            var order = await _context.Orders.FindAsync(id);

             if (order == null)
             {
                 return NotFound();
                }

            if (!Enum.TryParse<OrderStatus>(status, true, out var newStatus))
            {
                 return BadRequest("Invalid order status.");
            }

            if (!IsValidStatusTransition(order.Status, newStatus))
            {
                return BadRequest($"Cannot change order status from {order.Status} to {newStatus}.");
            }

            order.Status = newStatus;

            await _context.SaveChangesAsync();

            return NoContent();

        }

        private bool IsValidStatusTransition(OrderStatus currentStatus, OrderStatus newStatus)
        {
            return currentStatus switch
            {
                OrderStatus.PendingPayment => newStatus == OrderStatus.Paid,
                OrderStatus.Paid => newStatus == OrderStatus.Preparing,
                OrderStatus.Preparing => newStatus == OrderStatus.Ready,
                OrderStatus.Ready => newStatus == OrderStatus.Completed,
                _ => false
            };
        }
    }
}
