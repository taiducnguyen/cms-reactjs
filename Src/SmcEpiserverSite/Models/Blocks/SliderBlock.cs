using System.ComponentModel.DataAnnotations;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using EPiServer.Core;
using EPiServer;

namespace SmcEpiserverSite.Models.Blocks
{
    /// <summary>
    /// Used for a slider images block
    /// </summary>
    [SiteContentType(
        GroupName = Global.GroupNames.Specialized,
        GUID = "010eba77-0ea2-4f07-a188-3cd0361f1464")]
    [SiteImageUrl]
    public class SliderBlock : SiteBlockData
    {
        [Display(
                 GroupName = SystemTabNames.Content,
                 Description = "Main content area",
                 Order = 1)]
        [AllowedTypes(new[] { typeof(SliderItemBlock) })]
        public virtual ContentArea MainContentArea { get; set; }
    }
}
