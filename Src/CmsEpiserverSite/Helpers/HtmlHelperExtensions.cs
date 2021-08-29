using System;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;

namespace CmsEpiserverSite.Helpers
{
    public static class HtmlHelperExtensions
    {

        #region Js
        public static IHtmlString RenderFooterScriptAsEs6(this HtmlHelper htmlHelper)
        {
            var fileName = GetFileName("es6");

            return new HtmlString($"<script src=\'{fileName}\' type=\'module\'></script>");
        }

        public static IHtmlString RenderFooterScriptAsEs5(this HtmlHelper htmlHelper)
        {
            var fileName = GetFileName("es5");

            return new HtmlString($"<script src=\'{fileName}\' nomodule></script>");
        }
        #endregion

        private static string GetFileName(string folder)
        {
            var physicalPath = HostingEnvironment.MapPath("~/ui/") + folder;
            var fileInfos = System.IO.Directory.GetFiles(physicalPath).ToList();

            foreach (var file in fileInfos)
            {
                var fileName = Path.GetFileName(file);
                if (fileName.StartsWith("app.", StringComparison.OrdinalIgnoreCase)
                && fileName.EndsWith(".js", StringComparison.OrdinalIgnoreCase))
                {
                    return $"/ui/{folder}/{fileName}";
                }
            }

            return string.Empty;
        }
    }
}