export interface ICryptocurrency {
        id: string;
        symbol: string;
        name: string;
        asset_platform_id?: any;
        block_time_in_minutes: number;
        hashing_algorithm: string;
        categories: string[];
        public_notice: string;
        additional_notices: any[];
        links: Links;
        image: Image;
        country_origin: string;
        genesis_date: string;
        sentiment_votes_up_percentage: number;
        sentiment_votes_down_percentage: number;
        ico_data: IcoData;
        market_cap_rank: number;
        coingecko_rank: number;
        coingecko_score: number;
        developer_score: number;
        community_score: number;
        liquidity_score: number;
        public_interest_score: number;
        market_data: MarketData;
        public_interest_stats: PublicInterestStats;
        status_updates: any[];
        last_updated: Date;
}


export interface ReposUrl {
    github: string[];
    bitbucket: any[];
}

export interface Links {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: number;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: ReposUrl;
}

export interface Image {
    thumb: string;
    small: string;
    large: string;
}

export interface Links2 {
}

export interface IcoData {
    ico_start_date: Date;
    ico_end_date: Date;
    short_desc: string;
    description?: any;
    links: Links2;
    softcap_currency: string;
    hardcap_currency: string;
    total_raised_currency: string;
    softcap_amount?: any;
    hardcap_amount?: any;
    total_raised?: any;
    quote_pre_sale_currency: string;
    base_pre_sale_amount?: any;
    quote_pre_sale_amount?: any;
    quote_public_sale_currency: string;
    base_public_sale_amount: number;
    quote_public_sale_amount: number;
    accepting_currencies: string;
    country_origin: string;
    pre_sale_start_date?: any;
    pre_sale_end_date?: any;
    whitelist_url: string;
    whitelist_start_date?: any;
    whitelist_end_date?: any;
    bounty_detail_url: string;
    amount_for_sale?: any;
    kyc_required: boolean;
    whitelist_available?: any;
    pre_sale_available?: any;
    pre_sale_ended: boolean;
}

export interface CurrentPrice {
    eur: number;
    usd: number;
}

export interface Roi {
    times: number;
    currency: string;
    percentage: number;
}

export interface Ath {
    eur: number;
    usd: number;
}

export interface AthChangePercentage {
    eur: number;
    usd: number;
}

export interface AthDate {
    aed: Date;
    ars: Date;
    aud: Date;
    bch: Date;
    bdt: Date;
    bhd: Date;
    bmd: Date;
    bnb: Date;
    brl: Date;
    btc: Date;
    cad: Date;
    chf: Date;
    clp: Date;
    cny: Date;
    czk: Date;
    dkk: Date;
    dot: Date;
    eos: Date;
    eth: Date;
    eur: Date;
    gbp: Date;
    hkd: Date;
    huf: Date;
    idr: Date;
    ils: Date;
    inr: Date;
    jpy: Date;
    krw: Date;
    kwd: Date;
    lkr: Date;
    ltc: Date;
    mmk: Date;
    mxn: Date;
    myr: Date;
    ngn: Date;
    nok: Date;
    nzd: Date;
    php: Date;
    pkr: Date;
    pln: Date;
    rub: Date;
    sar: Date;
    sek: Date;
    sgd: Date;
    thb: Date;
    try: Date;
    twd: Date;
    uah: Date;
    usd: Date;
    vef: Date;
    vnd: Date;
    xag: Date;
    xau: Date;
    xdr: Date;
    xlm: Date;
    xrp: Date;
    yfi: Date;
    zar: Date;
    bits: Date;
    link: Date;
    sats: Date;
}

export interface Atl {
    eur: number;
    usd: number;
}

export interface AtlChangePercentage {
    eur: number;
    usd: number;
}

export interface AtlDate {
    eur: number;
    usd: number;
}

export interface MarketCap {
    eur: number;
    usd: number;
}

export interface FullyDilutedValuation {
}

export interface TotalVolume {
    eur: number;
    usd: number;
}

export interface High24h {
    eur: number;
    usd: number;
}

export interface Low24h {
    eur: number;
    usd: number;
}

export interface PriceChange24hInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage1hInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage24hInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage7dInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage14dInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage30dInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage60dInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage200dInCurrency {
    eur: number;
    usd: number;
}

export interface PriceChangePercentage1yInCurrency {
    eur: number;
    usd: number;
}

export interface MarketCapChange24hInCurrency {
    eur: number;
    usd: number;
}

export interface MarketCapChangePercentage24hInCurrency {
    eur: number;
    usd: number;
}

export interface MarketData {
    current_price: CurrentPrice;
    roi: Roi;
    ath: Ath;
    ath_change_percentage: AthChangePercentage;
    ath_date: AthDate;
    atl: Atl;
    atl_change_percentage: AtlChangePercentage;
    atl_date: AtlDate;
    market_cap: MarketCap;
    market_cap_rank: number;
    fully_diluted_valuation: FullyDilutedValuation;
    total_volume: TotalVolume;
    high_24h: High24h;
    low_24h: Low24h;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: PriceChange24hInCurrency;
    price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency;
    price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency;
    price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency;
    price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency;
    price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency;
    price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency;
    price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency;
    price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency;
    market_cap_change_24h_in_currency: MarketCapChange24hInCurrency;
    market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency;
    total_supply?: any;
    max_supply?: any;
    circulating_supply: number;
    last_updated: Date;
}

export interface PublicInterestStats {
    alexa_rank: number;
    bing_matches?: any;
}

