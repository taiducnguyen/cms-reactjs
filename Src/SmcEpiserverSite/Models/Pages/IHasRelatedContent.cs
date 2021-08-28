using EPiServer.Core;

namespace SmcEpiserverSite.Models.Pages
{
    public interface IHasRelatedContent
    {
        ContentArea RelatedContentArea { get; }
    }
}
