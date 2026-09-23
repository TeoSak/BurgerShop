namespace BurgerShop.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; } = string.Empty;
        public decimal TotalPrice { get; set; }
        public OrderStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public ICollection <OrderItem> Items { get; set; } = new List<OrderItem>();
    }
}
