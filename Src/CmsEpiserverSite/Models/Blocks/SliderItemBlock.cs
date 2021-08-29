using System.ComponentModel.DataAnnotations;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using EPiServer.Core;
using EPiServer;
using System.ComponentModel;

namespace CmsEpiserverSite.Models.Blocks
{
    /// <summary>
    /// Used for a slider items block
    /// </summary>
    [SiteContentType(
        GroupName = Global.GroupNames.Specialized,
        GUID = "e539dea8-1b82-4d04-b2a4-120bd620612b")]
    [Description("Slider item")]
    [SiteImageUrl]
    public class SliderItemBlock : SiteBlockData
    {
        [Display(
           GroupName = SystemTabNames.Content,
           Order = 1
           )]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        /// <summary>
        /// Gets or sets a description for the image, for example used as the alt text for the image when rendered
        /// </summary>
        [Display(
            GroupName = SystemTabNames.Content,
            Order = 1
            )]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string ImageDescription
        {
            get
            {
                var propertyValue = this["ImageDescription"] as string;

                // Return image description with fall back to the heading if no description has been specified
                return string.IsNullOrWhiteSpace(propertyValue) ? Heading : propertyValue;
            }
            set { this["ImageDescription"] = value; }
        }

        [Display(
            GroupName = SystemTabNames.Content,
            Order = 1
            )]
        [CultureSpecific]
        public virtual string Heading { get; set; }

        [Display(
            GroupName = SystemTabNames.Content,
            Order = 2
            )]
        [CultureSpecific]
        public virtual string ActionText { get; set; }

        [Display(
            GroupName = SystemTabNames.Content,
            Order = 3
            )]
        [CultureSpecific]
        [Required]
        public virtual string LinkText { get; set; }

        //The link must be required as an anchor tag requires an href in order to be valid and focusable
        [Display(
            GroupName = SystemTabNames.Content,
            Order = 4
            )]
        [CultureSpecific]
        [Required]
        public virtual Url LinkUrl { get; set; }
    }
}
