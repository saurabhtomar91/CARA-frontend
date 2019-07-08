export const GlobalVariable = Object.freeze({

    BASE_API_URL: "http://localhost:8080",
    //BASE_API_URL: "http://13.127.101.92:8080",
    //BASE_API_URL: "http://192.168.0.85:8080"
});

export const RequestApi = Object.freeze({

    //User API Call
    POST_USER_LOGIN: GlobalVariable.BASE_API_URL + '/employee/loginEmployee',
    POST_USER_VERIFY_OTP: GlobalVariable.BASE_API_URL + '/employee/verifyOtp',
    POST_USER_RESEND_OTP: GlobalVariable.BASE_API_URL + '/employee/sentOtpToUser',
    POST_USER_EMAIL_OTP: GlobalVariable.BASE_API_URL + '/employee/sentOtpToUserByEmail',
    POST_CIF_LIST: GlobalVariable.BASE_API_URL + '/employee/commodityList',
    POST_INVOICE_LIST: GlobalVariable.BASE_API_URL + '/employee/warehouseListActiveUsers',
    POST_USER_LIST: GlobalVariable.BASE_API_URL + '/employee/userList',
    POST_RELEASE_ORDER_LIST: GlobalVariable.BASE_API_URL + '/employee/releaseOrderList',
    POST_MANDI_LIST: GlobalVariable.BASE_API_URL + '/employee/mandiList',
    POST_LAB_API: GlobalVariable.BASE_API_URL + '/employee/labApi',
    POST_PRODUCT_LIST: GlobalVariable.BASE_API_URL + '/employee/ProductList',
    POST_EMPLOYEE_LIST: GlobalVariable.BASE_API_URL + '/employee/employeeList',
    POST_BANK_LIST: GlobalVariable.BASE_API_URL + '/employee/bankList',
    POST_TAB_LIST: GlobalVariable.BASE_API_URL + '/user/tabList',
    POST_ACTIVITY_LIST: GlobalVariable.BASE_API_URL + '/employee/activityList',
    GET_ALL_MANDI: GlobalVariable.BASE_API_URL + '/employee/getAllMandi',
    POST_USERANDPRODUCT_LIST: GlobalVariable.BASE_API_URL + '/employee/getUserAndProductList',
    POST_STOCK_DATA_LIST: GlobalVariable.BASE_API_URL + '/employee/stockData',
    POST_CWF_LIST: GlobalVariable.BASE_API_URL + '/employee/cwfList',
    POST_LEAD_REQUEST: GlobalVariable.BASE_API_URL + '/employee/leadRequest',
    GET_STATE_LIST: GlobalVariable.BASE_API_URL + '/employee/getStateList',
    POST_CITY_LIST: GlobalVariable.BASE_API_URL + '/user/city',
    POST_SURVEY_LIST: GlobalVariable.BASE_API_URL + '/employee/warehouseSurvey/surveyStatusList',
    GET_NEW_CIF: GlobalVariable.BASE_API_URL + '/employee/getNewCifNumber',
    GET_ALL_UNIT: GlobalVariable.BASE_API_URL + '/employee/getAllUnit',
    GET_ALL_PRODUCT: GlobalVariable.BASE_API_URL + '/employee/getAllProduct',
    GET_BANK_LIST: GlobalVariable.BASE_API_URL + '/employee/getBankList',
    POST_NEW_USER: GlobalVariable.BASE_API_URL + '/employee/addNewUser',
    POST_USER_BY_NAME: GlobalVariable.BASE_API_URL + '/employee/getUserByName',
    POST_VERIFY_RO: GlobalVariable.BASE_API_URL + '/employee/verifyReleaseOrder',
    POST_UPDATE_EMPLOYEE: GlobalVariable.BASE_API_URL + '/employee/updateEmployeeData',
    GET_LAB_LIST: GlobalVariable.BASE_API_URL + '/employee/labList',
    GET_MANDI_SUPERVISOR_LIST: GlobalVariable.BASE_API_URL + '/employee/mandiSuperviserList',
    GET_RAEA_MANAGER_LIST: GlobalVariable.BASE_API_URL + '/employee/areaManagerList',
    POST_ASSIGN_LAB_TO_MANDI: GlobalVariable.BASE_API_URL + '/employee/assignLabToMandi',
    POST_MANDI_TO_SUPERVISOR: GlobalVariable.BASE_API_URL + '/employee/assignMandiToSuperviser',
    //GET_PRODUCT_ID: GlobalVariable.BASE_API_URL + '/employee/getProductTestForm/' + productId,
    // GET_MANDI_ID: GlobalVariable.BASE_API_URL + '/employee/getDetails/Mandi/' + MandiId,
    // GET_MARKET_PRODUCT_ID: GlobalVariable.BASE_API_URL + '/employee/getCommodityDetails/' + MarketProductId
});
