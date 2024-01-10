function sidebarFunc() {
  //!home sidebar start

  const btnOpenSidebar = document.querySelector("#btn-menu"); //html de etikete id verip ulaşıyoruz
  const sidebar = document.querySelector("#sidebar");
  const btnCloseSidebar = document.querySelector("#close-sidebar");

  btnOpenSidebar.addEventListener("click", function () {
    //sonra bu etikete bir tıklanma olayı varsa şunu yap diyoruz
    sidebar.style.left = "0";
  });

  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });

  //click outside start
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar) //documentim üzerinde işlem yaptığımda şunlar hariç ise deyip
    ) {
      sidebar.style.left = "-100%";
    }
  });

  //click outside end

  //!home sidebar end
}

function searchModalFunc() {
  //!search modal start
  const btnSearchModal = document.querySelector("#search");
  const SearchModal = document.querySelector("#search-modal");
  const closeSearchModal = document.querySelector("#close-search");
  const SearchWrapper = document.querySelector("#search-wrapper");

  btnSearchModal.addEventListener("click", function () {
    SearchModal.style.visibility = "visible";
    SearchModal.style.opacity = "1";
  });

  closeSearchModal.addEventListener("click", function () {
    SearchModal.style.visibility = "hidden";
    SearchModal.style.opacity = "0";
  });

  //click outside start
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(SearchWrapper) &&
      !event.composedPath().includes(btnSearchModal)
    ) {
      SearchModal.style.visibility = "hidden";
      SearchModal.style.opacity = "0";
    }
  });

  //click outside end

  //!search modal end
}



function headerFunc() {
    sidebarFunc();
    searchModalFunc();
  }
  
  export default headerFunc();