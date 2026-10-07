frappe.ui.form.on("Weather", {
    validate(frm) {
        validate_weather(frm);
    },

    refresh(frm) {
        render_weather_preview(frm);
    },

    city(frm) {
        render_weather_preview(frm);
    },

    temperature(frm) {
        render_weather_preview(frm);
    },

    condition(frm) {
        render_weather_preview(frm);
    }
});

function validate_weather(frm) {
    if (!frm.doc.city) {
        frappe.throw("City is required");
    }

    if (frm.doc.temperature == null) {
        frappe.throw("Temperature is required");
    }

    if (frm.doc.temperature < -100 || frm.doc.temperature > 100) {
        frappe.throw("Temperature must be between -100°C and 100°C");
    }

    if (!frm.doc.condition) {
        frappe.throw("Please select a weather condition");
    }
}

function render_weather_preview(frm) {
    const condition = frm.doc.condition || "Unknown";
    const temperature = frm.doc.temperature ?? "--";
    const city = frm.doc.city || "Unknown";

    const icons = {
        Sunny: "☀️",
        Cloudy: "☁️",
        Rainy: "🌧️",
        Snowy: "❄️",
        Stormy: "⛈️",
        Foggy: "🌫️"
    };

    const icon = icons[condition] || "🌤️";

    frm.fields_dict.weather_preview.$wrapper.html(`
        <div class="weather-card">
            <div class="weather-card-header">
                <div>
                    <div class="weather-city">${city}</div>
                    <div class="weather-condition">${condition}</div>
                </div>

                <div class="weather-icon">
                    ${icon}
                </div>
            </div>

            <div class="weather-temperature">
                ${temperature}°C
            </div>

            <div class="weather-footer">
                <span>Recorded at</span>
                <span>${frm.doc.recorded_at || "--"}</span>
            </div>
        </div>
    `);
}

function get_weather_data(city) {
    return frappe.call({
        method: "demo_app.api.get_weather_data",
        args: {
            city: city
        },
        callback: function (r) {
            if (r.message) {
                console.log("Weather data for city:", city, r.message);
            }
        }
    });
}