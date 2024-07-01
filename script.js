const currency_list = [
    ["AED", "United Arab Emirates Dirhams", "د.إ"],
    ["AFN", "Afghan Afghani", "؋"],
    ["ALL", "Albanian Lek", "L"],
    ["AMD", "Armenian Dram", "֏"],
    ["ANG", "Netherlands Antillean Guilder", "ƒ"],
    ["AOA", "Angolan Kwanza", "Kz"],
    ["ARS", "Argentine Peso", "$"],
    ["AUD", "Australian Dollar", "$"],
    ["AWG", "Aruban Florin", "ƒ"],
    ["AZN", "Azerbaijani Manat", "₼"],
    ["BAM", "Bosnia Herzegovina Convertible Mark", "KM"],
    ["BBD", "Barbadian Dollar", "$"],
    ["BGN", "Bulgarian Lev", "лв"],
    ["BHD", "Bahraini Dinar", ".د.ب"],
    ["BIF", "Burundian Franc", "FBu"],
    ["BMD", "Bermudan Dollar", "$"],
    ["BOB", "Bolivian Boliviano", "Bs."],
    ["BRL", "Brazilian Real", "R$"],
    ["BSD", "Bahamian Dollar", "$"],
    ["BWP", "Botswanan Pula", "P"],
    ["BYN", "Belarusian Ruble", "Br"],
    ["BZD", "Belize Dollar", "$"],
    ["CDF", "Congolese Franc", "FC"],
    ["CHF", "Swiss Franc", "CHF"],
    ["CLP", "Chilean Peso", "$"],
    ["CNY", "Chinese Yuan", "¥"],
    ["COP", "Colombian Peso", "$"],
    ["CRC", "Costa Rican Colón", "₡"],
    ["CUP", "Cuban Peso", "$"],
    ["CZK", "Czech Koruna", "Kč"],
    ["DJF", "Djiboutian Franc", "Fdj"],
    ["DKK", "Danish Krone", "kr"],
    ["DOP", "Dominican Peso", "$"],
    ["DZD", "Algerian Dinar", "دج"],
    ["EGP", "Egyptian Pound", "£"],
    ["ERN", "Eritrean Nakfa", "Nfk"],
    ["EUR", "Euro", "€"],
    ["FJD", "Fijian Dollar", "$"],
    ["FKP", "Falkland Islands Pound", "£"],
    ["GBP", "British Pound", "£"],
    ["GEL", "Georgian Lari", "₾"],
    ["GHS", "Ghanaian Cedi", "₵"],
    ["GIP", "Gibraltar Pound", "£"],
    ["GMD", "Gambian Dalasi", "D"],
    ["GNF", "Guinean Franc", "FG"],
    ["GTQ", "Guatemalan Quetzal", "Q"],
    ["GYD", "Guyanaese Dollar", "$"],
    ["HKD", "Hong Kong Dollar", "$"],
    ["HNL", "Honduran Lempira", "L"],
    ["HRK", "Croatian Kuna", "kn"],
    ["HTG", "Haitian Gourde", "G"],
    ["HUF", "Hungarian Forint", "Ft"],
    ["IDR", "Indonesian Rupiah", "Rp"],
    ["ILS", "Israeli New Shekel", "₪"],
    ["INR", "Indian Rupee", "₹"],
    ["IQD", "Iraqi Dinar", "ع.د"],
    ["IRR", "Iranian Rial", "﷼"],
    ["ISK", "Icelandic Króna", "kr"],
    ["JMD", "Jamaican Dollar", "$"],
    ["JOD", "Jordanian Dinar", "د.ا"],
    ["JPY", "Japanese Yen", "¥"],
    ["KES", "Kenyan Shilling", "Sh"],
    ["KGS", "Kyrgystani Som", "с"],
    ["KHR", "Cambodian Riel", "៛"],
    ["KMF", "Comorian Franc", "CF"],
    ["KRW", "South Korean Won", "₩"],
    ["KWD", "Kuwaiti Dinar", "د.ك"],
    ["KYD", "Cayman Islands Dollar", "$"],
    ["KZT", "Kazakhstani Tenge", "₸"],
    ["LAK", "Laotian Kip", "₭"],
    ["LBP", "Lebanese Pound", "ل.ل"],
    ["LKR", "Sri Lankan Rupee", "Rs"],
    ["LRD", "Liberian Dollar", "$"],
    ["LSL", "Lesotho Loti", "M"],
    ["LYD", "Libyan Dinar", "ل.د"],
    ["MAD", "Moroccan Dirham", "د.م."],
    ["MDL", "Moldovan Leu", "L"],
    ["MGA", "Malagasy Ariary", "Ar"],
    ["MKD", "Macedonian Denar", "ден"],
    ["MMK", "Myanmar Kyat", "K"],
    ["MNT", "Mongolian Tugrik", "₮"],
    ["MOP", "Macanese Pataca", "MOP$"],
    ["MRU", "Mauritanian Ouguiya", "UM"],
    ["MUR", "Mauritian Rupee", "₨"],
    ["MVR", "Maldivian Rufiyaa", "ރ."],
    ["MWK", "Malawian Kwacha", "MK"],
    ["MXN", "Mexican Peso", "$"],
    ["MYR", "Malaysian Ringgit", "RM"],
    ["MZN", "Mozambican Metical", "MT"],
    ["NAD", "Namibian Dollar", "$"],
    ["NGN", "Nigerian Naira", "₦"],
    ["NIO", "Nicaraguan Córdoba", "C$"],
    ["NOK", "Norwegian Krone", "kr"],
    ["NPR", "Nepalese Rupee", "रु"],
    ["NZD", "New Zealand Dollar", "$"],
    ["OMR", "Omani Rial", "ر.ع."],
    ["PAB", "Panamanian Balboa", "B/"],
    ["PGK", "Papua New Guinean Kina", "K"],
    ["PHP", "Philippine Peso", "₱"],
    ["PKR", "Pakistani Rupee", "₨"],
    ["PLN", "Polish Zloty", "zł"],
    ["PYG", "Paraguayan Guarani", "₲"],
    ["QAR", "Qatari Riyal", "ر.ق"],
    ["RON", "Romanian Leu", "lei"],
    ["RSD", "Serbian Dinar", "дин"],
    ["RUB", "Russian Ruble", "₽"],
    ["RWF", "Rwandan Franc", "FRw"],
    ["SAR", "Saudi Riyal", "ر.س"],
    ["SBD", "Solomon Islands Dollar", "$"],
    ["SCR", "Seychellois Rupee", "₨"],
    ["SDG", "Sudanese Pound", "ج.س."],
    ["SEK", "Swedish Krona", "kr"],
    ["SGD", "Singapore Dollar", "$"],
    ["SHP", "St. Helena Pound", "£"],
    ["SLL", "Sierra Leonean Leone (1964—2022)", "Le"],
    ["SOS", "Somali Shilling", "Sh"],
    ["SRD", "Surinamese Dollar", "$"],
    ["SSP", "South Sudanese Pound", "£"],
    ["STN", "São Tomé Príncipe Dobra", "Db"],
    ["SYP", "Syrian Pound", "£"],
    ["SZL", "Swazi Lilangeni", "E"],
    ["THB", "Thai Baht", "฿"],
    ["TJS", "Tajikistani Somoni", "SM"],
    ["TMT", "Turkmenistani Manat", "T"],
    ["TND", "Tunisian Dinar", "د.ت"],
    ["TOP", "Tongan Paanga", "T$"],
    ["TRY", "Turkish Lira", "₺"],
    ["TTD", "Trinidad Tobago Dollar", "$"],
    ["TWD", "New Taiwan Dollar", "$"],
    ["TZS", "Tanzanian Shilling", "Sh"],
    ["UAH", "Ukrainian Hryvnia", "₴"],
    ["UGX", "Ugandan Shilling", "Sh"],
    ["USD", "US Dollar", "$"],
    ["UYU", "Uruguayan Peso", "$"],
    ["UZS", "Uzbekistani Som", "soʻm"],
    ["VES", "Venezuelan Bolívar", "Bs.S."],
    ["VND", "Vietnamese Dong", "₫"],
    ["VUV", "Vanuatu Vatu", "VT"],
    ["WST", "Samoan Tala", "T"],
    ["XAF", "Central African CFA Franc", "FCFA"],
    ["XCD", "East Caribbean Dollar", "$"],
    ["XOF", "West African CFA Franc", "CFA"],
    ["XPF", "CFP Franc", "F"],
    ["YER", "Yemeni Rial", "﷼"],
    ["ZAR", "South African Rand", "R"],
    ["ZMW", "Zambian Kwacha", "ZK"],
    ["ZWL", "Zimbabwean Dollar (2009)", "$"]
]; 

let api = "https://v6.exchangerate-api.com/v6/81e258f64025e4102d1e5f15/latest/USD";

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Populate dropdowns
currency_list.forEach((currency) => {
const code = currency[0];
const countryName = currency[1];

const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${countryName}`;
    fromDropDown.add(option);
})

currency_list.forEach((currency) => {
    const code = currency[0];
    const countryName = currency[1];

    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${countryName}`;
    toDropDown.add(option);
})

fromDropDown.value = "USD";

// Currency conversion
let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;

    const fromCurrency = "USD";
    const toCurrency = toDropDown.value;

if(amount.length != 0){
    fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
    let fromExchangeRate = data.conversion_rates[fromCurrency];
    let toExchnageRate = data.conversion_rates[toCurrency];
    const convertedAmount = (amount / fromExchangeRate) * toExchnageRate;

    // Find the symbol for the target currency
    let symbol = currency_list.find(currency => currency[0] === toCurrency)[2];

    const finalAmount = `${symbol} ${convertedAmount.toFixed(2)}`;
    document.querySelector("#amount").value = finalAmount;
    
    result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });

} 
// else {
//     alert("Please fill in the amount");
// }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);