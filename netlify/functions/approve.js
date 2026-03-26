exports.handler = async function(event, context) {
  const refNum = event.queryStringParameters.refNum;
  const action = event.queryStringParameters.action;
  
  const apiURL = "https://www.zohoapis.in/creator/custom/admin_pacedigitek/process_visitor_approval?public_key=8xJTrKj9bKGAyOaPqhZ6rGBDK&refNum=" + refNum + "&action=" + action;
  
  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
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
  } catch(error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
