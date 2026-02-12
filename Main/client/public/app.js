function testBackend() {
  fetch("http://localhost:4000/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      test: "Frontend connected",
      time: new Date().toISOString(),
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log("Backend response:", data);
      alert("Frontend → Backend connected ✅");
    })
    .catch(err => {
      console.error(err);
      alert("Backend not reachable ❌");
    });
}
