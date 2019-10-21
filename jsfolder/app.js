$(() => {
  const wic = data => {
    for (let i = 0; i < data.length; i++) {
      const $newdiv = $(`<div>`);
      $newdiv.addClass("newdiv");

      // const $store = $(`<p>`);
      // $store.text("STORE");
      // $(".resultindex").append($store);

      const $h1 = $("<h1>");
      $h1.text(`${data[i].vendor}`);
      $newdiv.append($h1);
      $(".resultindex").append($newdiv);

      const $h2 = $("<h2>");
      $h2.text(data[i].city);
      $newdiv.append($h2);
      $(".resultindex").append($newdiv);

      const $h3 = $("<h3>");
      $h3.text(data[i].street_address);
      $newdiv.append($h3);
      $(".resultindex").append($newdiv);

      const $h4 = $("<h4>");
      $h4.text(data[i].zip_code);
      $newdiv.append($h4);
      $(".resultindex").append($newdiv);

      const $h5 = $("<h5>");
      $h5.text(`Phone: ${data[i].phone}`);
      $newdiv.append($h5);
      $(".resultindex").append($newdiv);
    }
  };
  //////////// haven't touched the bottom part

  // $.ajax({
  //   url: "https://data.ct.gov/resource/jk32-cd4i.json",
  //   type: "GET",
  //   data: {
  //     $limit: 5000,
  //     $$app_token: "V98Fpmr6uzzLfn0F7Sev7drw5"
  //   }
  // }).then(wic);

  // .done(function(data) {
  //   alert("Retrieved " + data.length + " records from the dataset!");
  //   console.log(data);
  // });
  ///////// havent touched the upper part

  // zip code results//
  $("form").on("submit", event => {
    event.preventDefault();

    const zipcodeinput = $(".zipcode");
    const zipcodeResults = zipcodeinput.val();
    const zipcodecomplete = zipcodeResults.toUpperCase();
    const endpoint = `https://data.ct.gov/resource/jk32-cd4i.json?zip_code=${zipcodecomplete}`;
    console.log(endpoint); // just to see if this is working but it's only login the city from each section

    $.ajax({ url: endpoint }).then(wic);
  });

  //city function //
  $("form").on("submit", event => {
    event.preventDefault();

    const cityinput = $(".city");
    const cityResults = cityinput.val();
    const citycomplete = cityResults.toUpperCase();
    const endpoint = `https://data.ct.gov/resource/jk32-cd4i.json?city=${citycomplete}`;

    $.ajax({ url: endpoint }).then(wic);
  });

  // //

  //
  // nav bar don't touch

  let nav = document.getElementById("nav");
  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      nav.style.background = "#000000";
      nav.style.opacity = "1.0";
    } else {
      nav.style.opacity = "0.5";
    }
  };
});
