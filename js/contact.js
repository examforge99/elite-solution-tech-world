/* Business contact settings.
   Verify the official number and contact details before enabling links.
   Use the international WhatsApp number format with digits only, no +, spaces or dashes. */
window.ELITE_CONTACT = {
  whatsappNumber: "",
  phoneNumber: "",
  emailAddress: ""
};

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("project-form");
  var note = document.getElementById("form-note");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var settings = window.ELITE_CONTACT || {};
    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var service = String(data.get("service") || "").trim();
    var message = String(data.get("message") || "").trim();

    if (!name || !service) {
      if (note) note.textContent = "Please enter your name and choose a service.";
      return;
    }

    var enquiry = "Hello Elite Solution Tech World, my name is " + name +
      ". I would like to discuss: " + service + "." +
      (message ? "\n\nDetails: " + message : "");

    if (settings.whatsappNumber) {
      var number = String(settings.whatsappNumber).replace(/\D/g, "");
      window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(enquiry), "_blank", "noopener,noreferrer");
      if (note) note.textContent = "Your enquiry is ready in WhatsApp. Please review it and send when ready.";
    } else if (settings.emailAddress) {
      window.location.href = "mailto:" + settings.emailAddress + "?subject=" +
        encodeURIComponent("Website enquiry: " + service) + "&body=" + encodeURIComponent(enquiry);
      if (note) note.textContent = "Your email app should open with the enquiry prepared.";
    } else {
      if (note) note.textContent = "The form is ready, but contact delivery is not enabled yet. The official WhatsApp number or email must be added in js/contact.js after verification.";
    }
  });
});
