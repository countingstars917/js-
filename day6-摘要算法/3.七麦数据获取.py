import requests
from urllib.parse import urlparse, parse_qsl
import execjs
cookies = {
    'qm_check': 'A1sdRUIQChtxen8pI0dAMRcOUFseEHBeQF0JTjVBWCwycRd1QlhAXFEGFUdfS0laHQdKAAkABAxTX1VBWD0TR1JRRAp0BQlFEBQ3TSZKFUdBbwxvBBRFIlQsSUhTFxsQU1FVV1NHXEVYVElWBRsCHAkSSQ%3D%3D',
    'PHPSESSID': 'tb7t0iljabpgt7fq89um7gep44',
    'gr_user_id': '77627ec3-295b-4824-bf43-a152e72cb8f7',
    'USERINFO': 'GNTNgg%2F%2BJhWHgn6OYc%2F%2FTQZ1Zf1PwpU6DfLLDih%2BUkXYiX2WPGzMXnUCdIEkwWMCz6LK%2BDyVZjsrRE3Paid5tT1fzCRO1At%2B8pCx%2FmOrM%2BDB0AyNFeDWr4M72wev9ct98uHokbf1OUmKG4qY5WB27AylGZOSMNR1',
    'AUTHKEY': 'cSRcnKvNIhXUO1kKvrMF4L9KDkFstd1ySddpYbwV9%2BQ2v75se6YVbX%2B2vTS%2FwDrTXM5gVG%2BzcPVrV3GjV80O3VD9syOsS%2FfJmXZvvyw%2BoWmHDg45HnVvgg%3D%3D',
    'ada35577182650f1_gr_last_sent_cs1': 'qm20901154681',
    'aso_ucenter': 'bf3cP%2ByuHxQPSXZ96kLPvnhmH3mGwGsTJ%2FA%2BC1ILaGQP3zCiwRRniUoidzhkmiaJiCQ',
    'synct': '1753408407.051',
    'syncd': '-208',
    'ada35577182650f1_gr_session_id': '3af6c0f9-e56b-449c-8377-95f1229aa712',
    'ada35577182650f1_gr_last_sent_sid_with_cs1': '3af6c0f9-e56b-449c-8377-95f1229aa712',
    'ada35577182650f1_gr_cs1': 'qm20901154681',
    'ada35577182650f1_gr_session_id_sent_vst': '3af6c0f9-e56b-449c-8377-95f1229aa712',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://www.qimai.cn',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Cookie': 'qm_check=A1sdRUIQChtxen8pI0dAMRcOUFseEHBeQF0JTjVBWCwycRd1QlhAXFEGFUdfS0laHQdKAAkABAxTX1VBWD0TR1JRRAp0BQlFEBQ3TSZKFUdBbwxvBBRFIlQsSUhTFxsQU1FVV1NHXEVYVElWBRsCHAkSSQ%3D%3D; PHPSESSID=tb7t0iljabpgt7fq89um7gep44; gr_user_id=77627ec3-295b-4824-bf43-a152e72cb8f7; USERINFO=GNTNgg%2F%2BJhWHgn6OYc%2F%2FTQZ1Zf1PwpU6DfLLDih%2BUkXYiX2WPGzMXnUCdIEkwWMCz6LK%2BDyVZjsrRE3Paid5tT1fzCRO1At%2B8pCx%2FmOrM%2BDB0AyNFeDWr4M72wev9ct98uHokbf1OUmKG4qY5WB27AylGZOSMNR1; AUTHKEY=cSRcnKvNIhXUO1kKvrMF4L9KDkFstd1ySddpYbwV9%2BQ2v75se6YVbX%2B2vTS%2FwDrTXM5gVG%2BzcPVrV3GjV80O3VD9syOsS%2FfJmXZvvyw%2BoWmHDg45HnVvgg%3D%3D; ada35577182650f1_gr_last_sent_cs1=qm20901154681; aso_ucenter=bf3cP%2ByuHxQPSXZ96kLPvnhmH3mGwGsTJ%2FA%2BC1ILaGQP3zCiwRRniUoidzhkmiaJiCQ; synct=1753408407.051; syncd=-208; ada35577182650f1_gr_session_id=3af6c0f9-e56b-449c-8377-95f1229aa712; ada35577182650f1_gr_last_sent_sid_with_cs1=3af6c0f9-e56b-449c-8377-95f1229aa712; ada35577182650f1_gr_cs1=qm20901154681; ada35577182650f1_gr_session_id_sent_vst=3af6c0f9-e56b-449c-8377-95f1229aa712',
}


for i in range(1, 10):
    base_url = 'https://api.qimai.cn/rank/index?analysis=b&brand=free&country=cn&genre=36&device=iphone&date=2025-07-25&page={i}&is_rank_index=1&snapshot=07:08:10'.format(i=i)

    parsed_url = urlparse(base_url)
    query_params_list = parse_qsl(parsed_url.query)
    params_dict = dict(query_params_list[1:])
    with open('2.s_analysis.js', 'r', encoding='utf-8') as f:
        jscode = f.read()
    js = execjs.compile(jscode)
    cookies_str = '; '.join([f"{key}={value}" for key, value in cookies.items()])
    analysis_value = js.call('analysis', params_dict, cookies_str)
    url = base_url.replace('b', analysis_value)

    response = requests.get(
        url=url,
        cookies=cookies,
        headers=headers,
    )
    print(response.text)
