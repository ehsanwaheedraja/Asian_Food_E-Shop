const [reference, setreference] = useState("");
  const [productName, setproductName] = useState("");

  const getCustomerOrders = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/orderItems/${customerID}`
      );
      const jsonData = await response.json();

      setreference(jsonData.order_reference);
      setproductName(jsonData.product_name);
    } catch (err) {
      console.error(err.message);
    }