exports.handler = async function(event, context) {
  const refNum = event.queryStringParameters.refNum;
  const action = event.queryStringParameters.action;
  
  const apiURL = "https://www.zohoapis.in/creator/custom/admin_pacedigitek/process_visitor_approval?refNum=" + refNum + "&action=" + action;
  
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      "X-ZC-Public-Key": "8xJTrKj9bKGAyOaPqhZ6rGBDK"
    }
  });
  
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
