// Copyright (c) 2021, AiBizzHub
// For license information, please see license.txt

frappe.ui.form.on("Job Opportunity", {
	refresh: (frm) => {
		if (frm.doc.name)
			frm.add_web_link(`/job-openings/${frm.doc.name}`, "See on Website");
	},
});
