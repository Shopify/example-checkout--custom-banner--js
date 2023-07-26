import { extension, Banner } from "@shopify/ui-extensions/checkout";

// [START custom-banner.ext-point]
// Set up the entry point for the extension
export default extension(
  "purchase.checkout.block.render",
  (root, { settings }) => {
// [END custom-banner.ext-point]
    // Use the merchant-defined settings to retrieve the extension's content
// [START custom-banner.use-settings]
    // Set the content of the banner
    const { status, collapsible, description } = settings.current;

    // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
    const title = settings.current.title ?? "Custom Banner";
// [END custom-banner.use-settings]
// [START custom-banner.render]
    // Render the banner
    const banner = root.createComponent(
      Banner,
      {
        title,
        status,
        collapsible,
      }[description]
    );

    // When the merchant updates the banner title in the checkout editor, re-render the banner
    settings.subscribe((newSettings) => {
      banner.updateProps({
        title: newSettings.title ?? "Custom Banner",
        status: newSettings.status,
        collapsible: newSettings.collapsible,
      });
    });

    root.appendChild(banner);
  }
);
// [END custom-banner.render]