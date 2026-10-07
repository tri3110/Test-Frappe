frappe.listview_settings["Weather"] = {
    add_fields: ["city", "temperature", "condition", "recorded_at"],

    formatters: {
        temperature(value) {
            return `
                <div style="text-align: center;">
                    ${value ?? "--"}
                </div>
            `;
        },

        condition(value) {
            const weather = {
                Sunny: {
                    icon: "☀️",
                    color: "green"
                },
                Cloudy: {
                    icon: "☁️",
                    color: "blue"
                },
                Rainy: {
                    icon: "🌧️",
                    color: "orange"
                },
                Snowy: {
                    icon: "❄️",
                    color: "cyan"
                },
                Stormy: {
                    icon: "⛈️",
                    color: "red"
                },
                Foggy: {
                    icon: "🌫️",
                    color: "gray"
                }
            };

            const item = weather[value];

            if (!item) {
                return value || "Unknown";
            }

            return `
                <span style="color: ${item.color}; font-weight: 500;">
                    ${item.icon} ${value}
                </span>
            `;
        }
    },

    onload(listview) {
        $("<style>")
            .attr("type", "text/css")
            .html(`
                .frappe-list .list-row .list-row-col {
                    border-right: 1px solid #e5e7eb !important;
                    box-sizing: border-box;
                }

                .frappe-list .list-row-head {
                    background: #f8f9fa;
                    font-weight: 600;
                }

                .frappe-list .list-row-head .list-row-col[data-fieldname="temperature"],
                .frappe-list .list-row .list-row-col[data-fieldname="temperature"],
                .frappe-list .list-row-head .list-row-col[data-fieldname="condition"],
                .frappe-list .list-row .list-row-col[data-fieldname="condition"] {
                    text-align: center !important;
                }
            `)
            .appendTo("head");
    }
};