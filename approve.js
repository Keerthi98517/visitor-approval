exports.handler = async function(event, context) {
  const { refNum, action } = event.queryStringParameters;
  
  const apiURL = `https://www.zohoapis.in/creator/custom/admin_pacedigitek/process_visitor_approval?refNum=${refNum}&action=${action}&public_key=8xJTrKj9bKGAyOaPqhZ6rGBDK`;
  
  const response = await fetch(apiURL);
  const data = await response.json();
  
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};