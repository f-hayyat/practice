let items = 0;
      function bagcount() {
        document.getElementById("bag").innerHTML = `Your Bag has ${items} items.`;
      }
      function addBag() {
        items++;
        bagcount();
      }
      function wishlist() {
        if (items>0) {
        items--;
        bagcount();
      }};
      function sales() {
        items += 2;
        bagcount();
      };