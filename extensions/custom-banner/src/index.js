import { extension, Banner } from "@shopify/ui-extensions/checkout";
// [START custom-banner.ext-point]
// Set the entry points for the extension
const checkoutBlock = extension("purchase.checkout.block.render", renderApp);
export { checkoutBlock };
const deliveryAddress = extension("purchase.checkout.delivery-address.render-before", renderApp);
export { deliveryAddress };
// [END custom-banner.ext-point]

function renderApp(root, { settings }) {
  // Use the merchant-defined settings to retrieve the extension's content
// [START custom-banner.use-settings]
  // Set the content of the banner
  const {title, description, collapsible, status: merchantStatus} = settings;

  // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
  const status = merchantStatus ?? 'info';
// [END custom-banner.use-settings]
// [START custom-banner.render]
  // Render the banner
  const app = root.createComponent(
    Banner,
    {
      title,
      status,
      collapsible,
    },
    [description]
  );

  root.appendChild(app);
}
// [END custom-banner.render]
