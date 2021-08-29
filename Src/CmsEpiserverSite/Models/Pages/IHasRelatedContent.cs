using EPiServer.Core;

namespace CmsEpiserverSite.Models.Pages
{
    public interface IHasRelatedContent
    {
        ContentArea RelatedContentArea { get; }
    }
}
