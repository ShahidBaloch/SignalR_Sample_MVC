using Microsoft.AspNetCore.SignalR;

namespace SignalR_Sample_MVC.Hubs
{
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;
        public async Task NewWindowLoaded()
        {
            TotalViews++;
            // send update to all the clients that totalViews have been updated.
            await Clients.All.SendAsync("updateTotalViews",TotalViews);
        }
    }
}
