 $("#submit-form").submit((e) => {
      e.preventDefault(); // Prevent page reload
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_dLFwDBOwKbgGbqYMWmw29AwMUKozmawL41iSo0j4X7BWWA/formResponse", // Replace with your form's URL
        data: $("#submit-form").serialize(), // Serialize form data
        method: "POST",
        success: function (response) {
          alert("Form submitted successfully!");
          window.location.reload(); // Reload the page
          // or redirect to another page: window.location.href = "https://google.com";
        },
        error: function (err) {
          alert(" Thank You! We will get in touch with you shortly.");
          window.location.reload();
        },
      });
    });
