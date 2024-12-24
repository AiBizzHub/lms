# Copyright (c) 2021, AiBizzHub
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class CohortWebPage(Document):
	def get_template_html(self):
		return frappe.get_doc("Web Template", self.template).template
