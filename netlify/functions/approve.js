exports.handler = async function(event, context) {
  const refNum = event.queryStringParameters.refNum;
  const action = event.queryStringParameters.action;
  
  const apiURL = "https://www.zohoapis.in/creator/custom/admin_pacedigitek/process_visitor_approval?zapikey=8xJTrKj9bKGAyOaPqhZ6rGBDK&refNum=" + refNum + "&action=" + action;
  
  try {
    const response = await fetch(apiURL, {
      method: "GET"
    });
    
    const text = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: text
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
