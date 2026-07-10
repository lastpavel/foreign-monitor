(function () {
	console.log('SCRIPT BASLADI');


	if (window.__countryDetector) {
		clearInterval(window.__countryDetector);
	}
	let monitorCollapsed = false;

	const countries = {
		// Europe
		'30': { code: 'GR', name: 'Yunanistan' },
		'31': { code: 'NL', name: 'Hollanda' },
		'32': { code: 'BE', name: 'Belçika' },
		'33': { code: 'FR', name: 'Fransa' },
		'34': { code: 'ES', name: 'İspanya' },
		'36': { code: 'HU', name: 'Macaristan' },
		'39': { code: 'IT', name: 'İtalya' },
		'40': { code: 'RO', name: 'Romanya' },
		'41': { code: 'CH', name: 'İsviçre' },
		'43': { code: 'AT', name: 'Avusturya' },
		'44': { code: 'GB', name: 'Birleşik Krallık' },
		'45': { code: 'DK', name: 'Danimarka' },
		'46': { code: 'SE', name: 'İsveç' },
		'47': { code: 'NO', name: 'Norveç' },
		'48': { code: 'PL', name: 'Polonya' },
		'49': { code: 'DE', name: 'Almanya' },
		'351': { code: 'PT', name: 'Portekiz' },
		'352': { code: 'LU', name: 'Lüksemburg' },
		'353': { code: 'IE', name: 'İrlanda' },
		'354': { code: 'IS', name: 'İzlanda' },
		'355': { code: 'AL', name: 'Arnavutluk' },
		'356': { code: 'MT', name: 'Malta' },
		'357': { code: 'CY', name: 'Kıbrıs' },
		'358': { code: 'FI', name: 'Finlandiya' },
		'359': { code: 'BG', name: 'Bulgaristan' },
		'370': { code: 'LT', name: 'Litvanya' },
		'371': { code: 'LV', name: 'Letonya' },
		'372': { code: 'EE', name: 'Estonya' },
		'373': { code: 'MD', name: 'Moldova' },
		'374': { code: 'AM', name: 'Ermenistan' },
		'375': { code: 'BY', name: 'Belarus' },
		'376': { code: 'AD', name: 'Andorra' },
		'377': { code: 'MC', name: 'Monako' },
		'378': { code: 'SM', name: 'San Marino' },
		'380': { code: 'UA', name: 'Ukrayna' },
		'381': { code: 'RS', name: 'Sırbistan' },
		'382': { code: 'ME', name: 'Karadağ' },
		'383': { code: 'XK', name: 'Kosova' },
		'385': { code: 'HR', name: 'Hırvatistan' },
		'386': { code: 'SI', name: 'Slovenya' },
		'387': { code: 'BA', name: 'Bosna Hersek' },
		'389': { code: 'MK', name: 'Kuzey Makedonya' },
		'420': { code: 'CZ', name: 'Çekya' },
		'421': { code: 'SK', name: 'Slovakya' },
		'423': { code: 'LI', name: 'Lihtenştayn' },

		// North America
		'1': { code: 'US', name: 'Amerika Birleşik Devletleri' },
		'1242': { code: 'BS', name: 'Bahamalar' },
		'1246': { code: 'BB', name: 'Barbados' },
		'1264': { code: 'AI', name: 'Anguilla' },
		'1268': { code: 'AG', name: 'Antigua ve Barbuda' },
		'1284': { code: 'VG', name: 'Britanya Virjin Adaları' },
		'1345': { code: 'KY', name: 'Cayman Adaları' },
		'1473': { code: 'GD', name: 'Grenada' },
		'1649': { code: 'TC', name: 'Turks ve Caicos' },
		'1664': { code: 'MS', name: 'Montserrat' },
		'1670': { code: 'MP', name: 'Kuzey Mariana Adaları' },
		'1671': { code: 'GU', name: 'Guam' },
		'1684': { code: 'AS', name: 'Amerikan Samoası' },
		'1758': { code: 'LC', name: 'Saint Lucia' },
		'1767': { code: 'DM', name: 'Dominika' },
		'1784': { code: 'VC', name: 'Saint Vincent ve Grenadinler' },
		'1787': { code: 'PR', name: 'Porto Riko' },
		'1809': { code: 'DO', name: 'Dominik Cumhuriyeti' },
		'1868': { code: 'TT', name: 'Trinidad ve Tobago' },
		'1869': { code: 'KN', name: 'Saint Kitts ve Nevis' },
		'1876': { code: 'JM', name: 'Jamaika' },

		// South America
		'51': { code: 'PE', name: 'Peru' },
		'52': { code: 'MX', name: 'Meksika' },
		'53': { code: 'CU', name: 'Küba' },
		'54': { code: 'AR', name: 'Arjantin' },
		'55': { code: 'BR', name: 'Brezilya' },
		'56': { code: 'CL', name: 'Şili' },
		'57': { code: 'CO', name: 'Kolombiya' },
		'58': { code: 'VE', name: 'Venezuela' },
		'591': { code: 'BO', name: 'Bolivya' },
		'592': { code: 'GY', name: 'Guyana' },
		'593': { code: 'EC', name: 'Ekvador' },
		'594': { code: 'GF', name: 'Fransız Guyanası' },
		'595': { code: 'PY', name: 'Paraguay' },
		'597': { code: 'SR', name: 'Surinam' },
		'598': { code: 'UY', name: 'Uruguay' },

		// Asia
		'60': { code: 'MY', name: 'Malezya' },
		'61': { code: 'AU', name: 'Avustralya' },
		'62': { code: 'ID', name: 'Endonezya' },
		'63': { code: 'PH', name: 'Filipinler' },
		'64': { code: 'NZ', name: 'Yeni Zelanda' },
		'65': { code: 'SG', name: 'Singapur' },
		'66': { code: 'TH', name: 'Tayland' },
		'81': { code: 'JP', name: 'Japonya' },
		'82': { code: 'KR', name: 'Güney Kore' },
		'84': { code: 'VN', name: 'Vietnam' },
		'86': { code: 'CN', name: 'Çin' },
		'91': { code: 'IN', name: 'Hindistan' },
		'92': { code: 'PK', name: 'Pakistan' },
		'93': { code: 'AF', name: 'Afganistan' },
		'94': { code: 'LK', name: 'Sri Lanka' },
		'95': { code: 'MM', name: 'Myanmar' },
		'98': { code: 'IR', name: 'İran' },

		// Middle East
		'961': { code: 'LB', name: 'Lübnan' },
		'962': { code: 'JO', name: 'Ürdün' },
		'963': { code: 'SY', name: 'Suriye' },
		'964': { code: 'IQ', name: 'Irak' },
		'965': { code: 'KW', name: 'Kuveyt' },
		'966': { code: 'SA', name: 'Suudi Arabistan' },
		'967': { code: 'YE', name: 'Yemen' },
		'968': { code: 'OM', name: 'Umman' },
		'970': { code: 'PS', name: 'Filistin' },
		'971': { code: 'AE', name: 'Birleşik Arap Emirlikleri' },
		'972': { code: 'IL', name: 'İsrail' },
		'973': { code: 'BH', name: 'Bahreyn' },
		'974': { code: 'QA', name: 'Katar' },

		// Africa
		'20': { code: 'EG', name: 'Mısır' },
		'212': { code: 'MA', name: 'Fas' },
		'213': { code: 'DZ', name: 'Cezayir' },
		'216': { code: 'TN', name: 'Tunus' },
		'218': { code: 'LY', name: 'Libya' },
		'220': { code: 'GM', name: 'Gambiya' },
		'221': { code: 'SN', name: 'Senegal' },
		'222': { code: 'MR', name: 'Moritanya' },
		'223': { code: 'ML', name: 'Mali' },
		'224': { code: 'GN', name: 'Gine' },
		'225': { code: 'CI', name: 'Fildişi Sahili' },
		'226': { code: 'BF', name: 'Burkina Faso' },
		'227': { code: 'NE', name: 'Nijer' },
		'228': { code: 'TG', name: 'Togo' },
		'229': { code: 'BJ', name: 'Benin' },
		'230': { code: 'MU', name: 'Mauritius' },
		'231': { code: 'LR', name: 'Liberya' },
		'232': { code: 'SL', name: 'Sierra Leone' },
		'233': { code: 'GH', name: 'Gana' },
		'234': { code: 'NG', name: 'Nijerya' },
		'235': { code: 'TD', name: 'Çad' },
		'236': { code: 'CF', name: 'Orta Afrika Cumhuriyeti' },
		'237': { code: 'CM', name: 'Kamerun' },
		'238': { code: 'CV', name: 'Yeşil Burun Adaları' },
		'239': { code: 'ST', name: 'Sao Tome ve Principe' },
		'240': { code: 'GQ', name: 'Ekvator Ginesi' },
		'241': { code: 'GA', name: 'Gabon' },
		'242': { code: 'CG', name: 'Kongo Cumhuriyeti' },
		'243': { code: 'CD', name: 'Demokratik Kongo Cumhuriyeti' },
		'244': { code: 'AO', name: 'Angola' },
		'245': { code: 'GW', name: 'Gine-Bissau' },
		'248': { code: 'SC', name: 'Seyşeller' },
		'249': { code: 'SD', name: 'Sudan' },
		'250': { code: 'RW', name: 'Ruanda' },
		'251': { code: 'ET', name: 'Etiyopya' },
		'252': { code: 'SO', name: 'Somali' },
		'253': { code: 'DJ', name: 'Cibuti' },
		'254': { code: 'KE', name: 'Kenya' },
		'255': { code: 'TZ', name: 'Tanzanya' },
		'256': { code: 'UG', name: 'Uganda' },
		'257': { code: 'BI', name: 'Burundi' },
		'258': { code: 'MZ', name: 'Mozambik' },
		'260': { code: 'ZM', name: 'Zambiya' },
		'261': { code: 'MG', name: 'Madagaskar' },
		'263': { code: 'ZW', name: 'Zimbabve' },
		'264': { code: 'NA', name: 'Namibya' },
		'265': { code: 'MW', name: 'Malavi' },
		'266': { code: 'LS', name: 'Lesotho' },
		'267': { code: 'BW', name: 'Botsvana' },
		'268': { code: 'SZ', name: 'Esvatini' },
		'269': { code: 'KM', name: 'Komorlar' },
		'27': { code: 'ZA', name: 'Güney Afrika' },
	};

	function getCountry(phone) {
		phone = phone.replace(/\D/g, '');

		if (phone.startsWith('90')) {
			return null;
		}

		const codes = Object.keys(countries).sort((a, b) => b.length - a.length);

		for (const code of codes) {
			if (phone.startsWith(code)) {
				return {
					dialCode: code,
					...countries[code],
				};
			}
		}

		return {
			dialCode: '',
			code: 'INT',
			name: 'Uluslararası',
		};
	}

	function createMonitor() {
		let monitor = document.getElementById('foreign-monitor');

		if (monitor) return monitor;

		monitor = document.createElement('div');

		monitor.id = 'foreign-monitor';

		monitor.innerHTML = `
<div id="foreign-monitor-header">

    <span id="foreign-monitor-title">
        🌍 Yabancı Bağış Monitörü
    </span>

    <button id="foreign-monitor-toggle">
          −
    </button>

</div>

<div id="foreign-monitor-content">

    <div class="foreign-panel">

        <div
            id="foreign-cards-title"
            class="foreign-panel-header cards"
        >
            💳 Yabancı Kartlar (0)
        </div>

        <div
            id="foreign-cards-grid"
            class="foreign-panel-grid"
        ></div>

    </div>

    <div class="foreign-panel">

        <div
            id="foreign-review-title"
            class="foreign-panel-header review"
        >
            📱 İncelenecekler (0)
        </div>

        <div
            id="foreign-review-grid"
            class="foreign-panel-grid"
        ></div>

    </div>

</div>

<div id="bin-popup">

    <div id="bin-popup-box">

        <div id="bin-popup-close">
            ✕
        </div>

        <div style="
            font-size:18px;
            font-weight:bold;
            margin-bottom:15px;
        ">
            BIN Detayları
        </div>

        <div id="bin-popup-content"></div>

    </div>

</div>
`;

		document.body.appendChild(monitor);
		const popup = document.getElementById('bin-popup');

		const closeBtn = document.getElementById('bin-popup-close');

		if (closeBtn) {
			closeBtn.onclick = () => {
				popup.style.display = 'none';
			};
		}

		if (popup) {
			popup.onclick = (e) => {
				if (e.target === popup) {
					popup.style.display = 'none';
				}
			};
		}
		monitor.querySelector('#foreign-monitor-toggle').onclick = () => {
			monitorCollapsed = !monitorCollapsed;

			const content = document.getElementById('foreign-monitor-content');

			if (!content) return;

			content.style.display = monitorCollapsed ? 'none' : 'flex';

			monitor.querySelector('#foreign-monitor-toggle').innerText =
				monitorCollapsed ? '+' : '−';
		};

		return monitor;
	}

	const binCache = {};

	async function run() {
		const foreignList = [];
		const reviewList = [];
		const iframe = document.querySelector(
			'iframe[id*="layout_iframe_5_app-donations"]'
		);

		if (!iframe) return;

		const doc = iframe.contentDocument || iframe.contentWindow?.document;

		if (!doc) return;

		const rows = [...doc.querySelectorAll('#record_list table tr')].filter(
			(row) =>
				row.hasAttribute('onclick') &&
				row.getAttribute('onclick')?.includes('edit_order')
		);

		for (const row of rows) {
			const td = row.querySelectorAll('td')[5];

			if (!td) continue;

			const gsmDiv = [...td.querySelectorAll('div')].find((div) =>
				div.textContent.includes('GSM')
			);

			if (!gsmDiv) continue;

			const match = gsmDiv.textContent.match(/\+?\d{8,20}/);

			if (!match) continue;

			const phone = match[0].replace(/\D/g, '');
			const country = getCountry(phone);
			
			if(country){

    gsmDiv.style.position =
        'relative';

    let phoneFlag =
        gsmDiv.querySelector(
            '.phone-country-flag'
        );

    if(!phoneFlag){

        phoneFlag =
            document.createElement(
                'span'
            );

        phoneFlag.className =
            'phone-country-flag';

        phoneFlag.style.cssText = `
            position:absolute;
            right:0;
            top:-2px;
            z-index:9999;
            pointer-events:none;
        `;

        gsmDiv.appendChild(
            phoneFlag
        );

    }

    phoneFlag.innerHTML = `
        <img
            src="https://flagcdn.com/16x12/${country.code.toLowerCase()}.png"
            style="
                width:16px;
                height:12px;
                border-radius:2px;
            "
        >
    `;

}

			const isCreditCard = [...row.querySelectorAll('.eds-label')].some(
				(el) => el.innerText.trim() === 'Kredi Kartı'
			);

			if (!isCreditCard) {
				const paymentType =
					[...row.querySelectorAll('.eds-label')]
						.map((el) => el.innerText.trim())
						.find((text) => text !== 'Yeni Bağışlar') || '-';

				const phoneCountry = getCountry(phone);

				if (phoneCountry) {
					const name =
						row.querySelectorAll('td')[2]?.innerText?.split('\n')[0]?.trim() ||
						'-';

					const bgs =
						row.querySelectorAll('td')[3]?.innerText?.split('\n')[0]?.trim() ||
						'-';

					const tds = row.querySelectorAll('td');

					let amount =
						tds[14]?.innerText?.trim() || tds[13]?.innerText?.trim() || '-';

					if (amount.startsWith('0,00') || amount.startsWith('0.00')) {
						const rowText = row.innerText;

						const amounts = rowText.match(
							/\d{1,3}(?:\.\d{3})*,\d{2}\s*(?:TRY|EUR|USD|GBP)/g
						);

						if (amounts?.length) {
							amount = amounts[amounts.length - 1];
						}
					}

					reviewList.push({
						phoneCountry,
						phone,
						name,
						bgs,
						amount,
						paymentType,
						row,
					});
				}

				continue;
			}
			const cardNumber = row
				.querySelectorAll('td')[9]
				?.innerText?.trim()
				?.replace(/\s+/g, '');
				const cardTd =
    row.querySelectorAll('td')[9];

			if (!cardNumber) {
				continue;
			}

			const bin = cardNumber.substring(0, 6);

			if (bin.length !== 6) {
				continue;
			}

			let binData;

			if (binCache[bin]) {
				binData = binCache[bin];
			} else {
				try {
					const response = await fetch(
						'https://bin-api.aktas405.workers.dev/' + bin,
						{
							cache: 'force-cache',
						}
					);

					binData = await response.json();

					binCache[bin] = binData;
				} catch (e) {
					continue;
				}
			}

			if (!binData || !binData.ulke || binData.ulke === 'TURKEY') {
				continue;
			}
			if(cardTd){

    const originalText =
        cardTd.innerText.trim();

    if(
        !originalText.includes(
            ' - ' + binData.ulke
        )
    ){

        cardTd.innerText =
            originalText +
            ' - ' +
            binData.ulke;

    }

}
			const name =
				row.querySelectorAll('td')[2]?.innerText?.split('\n')[0]?.trim() || '-';

			const bgs =
				row.querySelectorAll('td')[3]?.innerText?.split('\n')[0]?.trim() || '-';

			const tds = row.querySelectorAll('td');

			let amount =
				tds[14]?.innerText?.trim() || tds[13]?.innerText?.trim() || '-';

			if (amount.startsWith('0,00') || amount.startsWith('0.00')) {
				const rowText = row.innerText;

				const amounts = rowText.match(
					/\d{1,3}(?:\.\d{3})*,\d{2}\s*(?:TRY|EUR|USD|GBP)/g
				);

				if (amounts?.length) {
					amount = amounts[amounts.length - 1];
				}
			}

			const phoneCountry = getCountry(phone);

			foreignList.push({
				country: {
					code: 'INT',
					name: binData.ulke,
					dialCode: '',
				},
				phoneCountry,

				phone,
				name,
				bgs,
				amount,
				row,
				binData,
				bin,
			});
		}
		const monitor = createMonitor();

		if (!foreignList.length && !reviewList.length) {
			monitor.style.display = 'none';

			return;
		}


const debrisRows = [
    ...foreignList,
    ...reviewList
];

debrisRows.forEach(item => {

    if(item.row.querySelector(".fm-debris"))
        return;

    item.row.style.position = "relative";

	

    const box = document.createElement("div");
box.className = "fm-debris";
box.style.cssText = `
position:absolute;
right:15px;
bottom:4px;
display:flex;
align-items:center;
gap:10px;
padding:6px 10px;
background:#fff;
border:1px solid #dcdcdc;
border-radius:8px;
box-shadow:0 1px 3px rgba(0,0,0,.08);
z-index:99999;
min-width:max-content;
`;
box.innerHTML = `
    <label class="fm-debris-check">
        <input
            type="checkbox"
            class="fm-debris-checkbox"
        >
        Debris Bildirim
    </label>

    <input
        type="text"
        class="fm-debris-date"
        placeholder="GG.AA.YYYY"
        maxlength="10"
    >

    <button
        type="button"
        class="fm-debris-save"
    >
        Kaydet
    </button>
`;
const check = box.querySelector(".fm-debris-check");
const date = box.querySelector(".fm-debris-date");
const save = box.querySelector(".fm-debris-save");

check.style.cssText = `
display:flex;
align-items:center;
gap:6px;
font-size:12px;
font-weight:600;
`;

date.style.cssText = `
width:90px;
height:24px;
border:1px solid #cfcfcf;
border-radius:5px;
text-align:center;
font-size:12px;
outline:none;
`;

date.addEventListener("focus", () => {
    date.style.borderColor = "#2dc56b";
    date.style.boxShadow = "0 0 0 3px rgba(45,197,107,.18)";
});

date.addEventListener("blur", () => {
    date.style.borderColor = "#cfcfcf";
    date.style.boxShadow = "none";
});

save.style.cssText = `
height:28px;
padding:0 12px;
border:none;
border-radius:6px;
background:#2dc56b;
color:#fff;
font-size:12px;
font-weight:600;
cursor:pointer;
transition:.2s;
`;

save.addEventListener("mouseenter", () => {
    save.style.background = "#23a956";
});

save.addEventListener("mouseleave", () => {
    save.style.background = "#2dc56b";
});
    // BURASI ÖNEMLİ
    box.addEventListener("click", e => {
        e.stopPropagation();
    });

    box.addEventListener("mousedown", e => {
        e.stopPropagation();
    });

    box.addEventListener("mouseup", e => {
        e.stopPropagation();
    });

    box.querySelectorAll("input").forEach(input => {

        input.addEventListener("click", e => {
            e.stopPropagation();
        });

        input.addEventListener("mousedown", e => {
            e.stopPropagation();
        });

    });
const match = item.row
    .getAttribute("onclick")
    ?.match(/edit_order\(\s*'(\d+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*\)/);

if(!match) return;

const orderId = match[1];
const orderCode = match[2];
const customerId = match[3];

const checkbox = box.querySelector(".fm-debris-checkbox");
const dateInput = box.querySelector(".fm-debris-date");
const saveBtn = box.querySelector(".fm-debris-save");

(async()=>{

    try{

        const res = await fetch(
            "https://foreign-monitor.aktas405.workers.dev/debris/" + orderId
        );

        if(res.ok){

    const json = await res.json();

    checkbox.checked = json.checked == 1;
    dateInput.value = json.notify_date || "";

}

    }catch(e){
        console.log(e);
    }

})();

saveBtn.onclick = async e => {

    e.preventDefault();
    e.stopPropagation();

    saveBtn.disabled = true;
    saveBtn.innerText = "Kaydediliyor...";

    try{

        await fetch(
            "https://foreign-monitor.aktas405.workers.dev/debris",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({

                    order_id:orderId,
                    order_code:orderCode,
                    customer_id:customerId,

                    checked:checkbox.checked ? 1 : 0,
                    notify_date:dateInput.value.trim()

                })
            }
        );

        saveBtn.innerText="Kaydedildi";

    }catch(e){

        console.log(e);

        saveBtn.innerText="Hata";

    }

    setTimeout(()=>{

        saveBtn.disabled=false;
        saveBtn.innerText="Kaydet";

    },1500);

};
    item.row.appendChild(box);

});
		
		monitor.style.display = 'block';
		const content = document.getElementById('foreign-monitor-content');

		if (content) {
			content.style.display = monitorCollapsed ? 'none' : 'flex';
		}

		document.getElementById('foreign-monitor-title').innerHTML =
			'🌍 Sayfada Yabancı (' + foreignList.length + ') Bağış Bulunmaktadır';

		const cardsGrid = document.getElementById('foreign-cards-grid');

		const reviewGrid = document.getElementById('foreign-review-grid');

		cardsGrid.innerHTML = '';
		reviewGrid.innerHTML = '';

		foreignList.forEach((item) => {
			const card = document.createElement('div');

			card.className = 'foreign-card';

			card.innerHTML = `
    <div class="foreign-top">
    <div class="foreign-bin">

    <b>BIN Kodu:</b>

    ${item.bin}

    <img
        class="foreign-bin-info"
        data-bin='${JSON.stringify(item.binData).replace(/'/g, '&#39;')}'
        src="https://cdn.shopify.com/s/files/1/1006/3288/7661/files/question-circle-svgrepo-com.svg?v=1781882042"
    >

</div>

        <div class="foreign-country">


    <b>Ülke:</b>

    ${item.country.name}

</div>

</div>

        <div class="foreign-arrow">
            ›
        </div>

    </div>

    <div class="foreign-name">
        <b>İsim:</b>
        ${item.name}
    </div>


<div class="foreign-phone">

    <b>Telefon:</b>

    <span style="
        display:flex;
        align-items:center;
        gap:5px;
        white-space:nowrap;
    ">

        ${
					item.phoneCountry
						? `<img
                    src="https://flagcdn.com/16x12/${item.phoneCountry.code.toLowerCase()}.png"
                    style="
                        width:16px;
                        height:12px;
                        border-radius:2px;
                        flex-shrink:0;
                    "
                >`
						: ''
				}

        <span>${item.phone}</span>

    </span>

</div>

    <div class="foreign-bgs">
        <b>Bağış Kodu:</b>
        ${item.bgs}
    </div>

    <div class="foreign-amount">
        <b>Miktar:</b>
        ${item.amount}
    </div>
`;

			card.style.cursor = 'pointer';

			card.onclick = () => {
				item.row.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});

				const cells = item.row.querySelectorAll('td');

				cells.forEach((td) => {
					td.style.transition = 'background .5s';

					td.style.background = '#fff59d';
				});

				setTimeout(() => {
					cells.forEach((td) => {
						td.style.background = '';
					});
				}, 3000);
			};
			document.getElementById('foreign-cards-title').innerHTML =
				'💳 Yabancı Kartlar (' + foreignList.length + ')';

			document.getElementById('foreign-review-title').innerHTML =
				'📱 İncelenecekler (0)';
			const infoBtn = card.querySelector('.foreign-bin-info');

			if (infoBtn) {
				infoBtn.onclick = (e) => {
					e.stopPropagation();

					const data = JSON.parse(infoBtn.dataset.bin);

					const popup = document.getElementById('bin-popup');

					const content = document.getElementById('bin-popup-content');

					content.innerHTML = `

            <div class="bin-row">
                <div class="bin-label">Kart Otoritesi</div>
                <div class="bin-value">${data.marka || '-'}</div>
            </div>

            <div class="bin-row">
                <div class="bin-label">Kart Tür</div>
                <div class="bin-value">${data.tur || '-'}</div>
            </div>

            <div class="bin-row">
                <div class="bin-label">Kart Kategori</div>
                <div class="bin-value">${data.kategori || '-'}</div>
            </div>

            <div class="bin-row">
                <div class="bin-label">Banka İsmi</div>
                <div class="bin-value">${data.banka || '-'}</div>
            </div>

            <div class="bin-row">
                <div class="bin-label">Kart Ülke</div>
                <div class="bin-value">${data.ulke || '-'}</div>
            </div>

        `;

					popup.style.display = 'flex';
				};
			}
			cardsGrid.appendChild(card);
		});

		document.getElementById('foreign-review-title').innerHTML =
			'📱 İncelenecekler (' + reviewList.length + ')';

		reviewList.forEach((item) => {
			const card = document.createElement('div');

			card.className = 'foreign-card';

			card.innerHTML = `

        <div class="foreign-top">

            <div class="foreign-country">

                <b>Telefon Ülke:</b>

                ${item.phoneCountry.name}

            </div>

            <div class="foreign-arrow">
                ›
            </div>

        </div>

        <div class="foreign-name">
            <b>İsim:</b>
            ${item.name}
        </div>

        <div class="foreign-phone">

            <b>Telefon:</b>

            <span style="
                display:flex;
                align-items:center;
                gap:5px;
                white-space:nowrap;
            ">

                <img
                    src="https://flagcdn.com/16x12/${item.phoneCountry.code.toLowerCase()}.png"
                    style="
                        width:16px;
                        height:12px;
                        border-radius:2px;
                    "
                >

                <span>${item.phone}</span>

            </span>

        </div>

        <div class="foreign-bgs">
            <b>Bağış Kodu:</b>
            ${item.bgs}
        </div>

        <div class="foreign-payment">
            <b>Ödeme Türü:</b>
            ${item.paymentType}
        </div>

        <div class="foreign-amount">
            <b>Miktar:</b>
            ${item.amount}
        </div>

    `;

			card.onclick = () => {
				item.row.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});

				const cells = item.row.querySelectorAll('td');

				cells.forEach((td) => {
					td.style.transition = 'background .5s';

					td.style.setProperty('background', '#fff59d', 'important');
				});

				setTimeout(() => {
					cells.forEach((td) => {
						td.style.removeProperty('background');
					});
				}, 3000);
			};

			reviewGrid.appendChild(card);
		});
	}

	run();

	window.__countryDetector = setInterval(run, 5000);
	console.log('SCRIPT BITTI');
})();


/*  bağış kalemi yazdırma*/


async function run() {

    const iframe = document.querySelector(
        'iframe[id*="layout_iframe_5_app-donations"]'
    );

    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!doc) return;

    doc.querySelectorAll('tr[onclick*="edit_order"]').forEach(row => {

        if (row.querySelector(".fm-test")) return;

        const detail = row.nextElementSibling;

        if (!detail || !detail.id?.startsWith("order-detail-")) return;

        const tags = [...detail.querySelectorAll("li")]
            .map(li => {
                const t = li.textContent.trim();
                return t.includes("→")
                    ? t.split("→")[1].trim()
                    : null;
            })
            .filter(Boolean);

        if (!tags.length) return;

        const number =
            row.querySelector("td:first-child b")
                ?.textContent
                .replace(".", "")
                .trim() || "";

        row.style.position = "relative";
        row.style.height = "78px";

        const div = doc.createElement("div");

        div.className = "fm-test";

        div.style.cssText = `
            position:absolute;
            left:40px;
            right:20px;
            bottom:2px;
            display:flex;
            gap:6px;
            flex-wrap:wrap;
            align-items:center;
            z-index:999999;
            padding:3px 0;
            pointer-events:none;
        `;

 const uniqueTags = [...new Set(tags)];

div.innerHTML = uniqueTags.map((tag, index) => `
    <span style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        height:22px;
        padding:0 10px 0 0;
        background:linear-gradient(180deg,#ffffff,#f4f4f4);
        color:#333;
        border:1px solid #d7d7d7;
        border-radius:999px;
        box-shadow:
            0 1px 2px rgba(0,0,0,.08),
            inset 0 1px 0 rgba(255,255,255,.8);
        font-size:11px;
        font-weight:600;
        white-space:nowrap;
        overflow:hidden;
    ">
        <span style="
            width:22px;
            height:22px;
            margin-right:8px;
            border-radius:50%;
            background:#2dc56b;
            color:#fff;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:11px;
            font-weight:700;
            flex:none;
        ">${index + 1}</span>

        ${tag}
    </span>
`).join("");

        row.appendChild(div);

    });

}

setInterval(run, 1000);
run();



/*  yorumları bulma */

async function runDonationNotes() {

    const iframe = document.querySelector(
        'iframe[id*="layout_iframe_5_app-donations"]'
    );

    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!doc) return;

    doc.querySelectorAll('tr[onclick*="edit_order"]').forEach(row => {

        if (row.querySelector(".fm-note")) return;

        const payment = [...row.querySelectorAll("span.eds-label")]
            .find(x => x.textContent.trim() === "Kredi Kartı");

        if (!payment) return;

        const detail = row.nextElementSibling;

        if (!detail) return;

        const note = detail.querySelector('[id^="donation-detail-"]');

        if (!note) return;

        const text = note.textContent.trim();

        if (
            !text ||
            text === "Açıklama bulunmuyor."
        ) return;

        row.style.position = "relative";

        const div = doc.createElement("div");

        div.className = "fm-note";

        div.style.cssText = `
           position: absolute;
    right: 20px;
    bottom: 2px;
    max-width: 520px;
    padding: 5px 10px;
    background: firebrick;
    border: 1px solid rgb(229, 214, 123);
    border-radius: 6px;
    font-size: 11px;
    color: rgb(255 255 255);
    line-height: 1.35;
    text-align: right;
    z-index: 999999;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
        `;

        div.innerHTML = `
            <b>📝 Açıklama:</b> ${text}
        `;

        row.appendChild(div);

    });

}

setInterval(runDonationNotes,1000);
runDonationNotes();



/*  satır yüksekliği arttırma*/

async function fixDonationRows() {

    const iframe = document.querySelector(
        'iframe[id*="layout_iframe_5_app-donations"]'
    );

    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!doc) return;

    doc.querySelectorAll('tr[onclick*="edit_order"]').forEach(row => {

        if (row.dataset.fmSpacing) return;

        row.dataset.fmSpacing = "1";

        row.style.height = "120px";

        row.querySelectorAll("td").forEach(td => {

            td.style.verticalAlign = "top";
            td.style.paddingBottom = "28px";

        });

    });

}

setInterval(fixDonationRows,1000);
fixDonationRows();
