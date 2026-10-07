frappe.ui.form.on("Demo Dashboard", {
    refresh(frm) {
        console.log("Demo Dashboard JS loaded!");

        frm.fields_dict.weather_chart.$wrapper.html(`
            <div style="
                padding: 30px;
                background: #f8f9fa;
                border: 1px solid #ddd;
                border-radius: 10px;
                text-align: center;
            ">
                <h2>Dashboard loaded successfully</h2>
                <p>Weather chart sẽ hiển thị ở đây.</p>
            </div>
        `);
    }
});