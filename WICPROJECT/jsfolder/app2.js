$(() => {
  const wic = data => {
    for (let i = 0; i < data.length; i++) {
      const $newdiv = $(`<div>`);
      $newdiv.addClass("newdiv");

      const $h2 = $("<h2>");
      $h2.text(`${data[i].marketname}`);
      $newdiv.append($h2);
      $(".resultindex").append($newdiv);

      const $h3 = $("<a>")
        .addClass("link")
        .attr("href", data[i].website.url)
        .attr("target", "_blank");
      $h3.text(data[i].website.url);
      $newdiv.append($h3);
      $(".resultindex").append($newdiv);

      const $h4 = $("<h4>");
      $h4.text(data[i].season1time);
      $newdiv.append($h4);
      $(".resultindex").append($newdiv);

      const $h5 = $("<h5>");
      $h5.text(`Location: ${data[i].location_1.human_address}`);
      $newdiv.append($h5);
      $(".resultindex").append($newdiv);
    }
  };

  // //FARMERS WIC function //
  $("form").on("submit", event => {
    event.preventDefault();

    const countyInput = $(".counties");
    const countyResults = countyInput.val();
    const endpoint = `https://data.ct.gov/resource/qkcc-8trv.json?wic=Y&county=${countyResults}`;
    console.log(endpoint);
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
