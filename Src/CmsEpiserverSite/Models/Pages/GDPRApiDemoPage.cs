using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using CmsEpiserverSite.Models;
using CmsEpiserverSite.Models.Pages;
using System.ComponentModel.DataAnnotations;

namespace CmsEpiserverSite
{
    [SiteContentType(GUID = "0877D78B-8673-4CF9-9F78-3E50C30C4479",
        GroupName = CmsEpiserverSite.Global.GroupNames.Specialized,
        DisplayName = "Find GDPR API Demo Page")]
    public class GDPRApiDemoPage : SitePageData, ISearchPage
    {
    }
}
