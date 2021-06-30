export function ServiceWorker () {
  <script type="text/javascript">
    {(function () {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./service-worker.js", { scope: "/" })
          .then(() => console.log("Service Worker registered successfully."))
          .catch(error => console.log("Service Worker registration failed:", error));
      }
    })()};
  </script>
};