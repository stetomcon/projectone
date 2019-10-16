$(() => {
  $.ajax({
    url: "https://data.ct.gov/resource/jk32-cd4i.json",
    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "V98Fpmr6uzzLfn0F7Sev7drw5"
    }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
  });
});
