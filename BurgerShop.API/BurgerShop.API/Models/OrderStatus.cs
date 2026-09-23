namespace BurgerShop.API.Models
{
    public enum OrderStatus
    {
        PendingPayment,
        Paid,
        Preparing,
        Ready,
        Completed,
        Cancelled
    }
}
