// function redirect_demo_workspace() {
//     const route = frappe.get_route();
//     if (
//         route[0] === "Workspaces" &&
//         route[1] === "Demo App"
//     ) {
//         frappe.set_route("demo-app", "weather");
//     }
// }

// frappe.router.on("change", () => redirect_demo_workspace());