export interface ChannelCategory {
  id: string;
  name: string;
  badge: string;
  count: string;
  channels: {
    name: string;
    resolution: '8K' | '4K UHD' | 'FHD 1080p';
    category: string;
    isPopular?: boolean;
  }[];
}

export const CHANNEL_CATEGORIES: ChannelCategory[] = [
  {
    id: 'usa-sports',
    name: 'USA Premium Sports & PPV',
    badge: 'Live Events',
    count: '350+ Channels',
    channels: [
      { name: 'NFL Network & NFL RedZone', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'ESPN 1, 2, News, ESPNU', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'FOX Sports 1 (FS1) & FS2', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'NBA TV & NBA League Pass Feeds', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'MLB Network & Extra Innings', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'NHL Network & Center Ice', resolution: '4K UHD', category: 'USA Sports', isPopular: true },
      { name: 'NBC Sports Network & Peacock Feeds', resolution: '4K UHD', category: 'USA Sports' },
      { name: 'UFC Fight Night & Main Card PPV', resolution: '8K', category: 'USA Sports', isPopular: true },
      { name: 'WWE Network & Special Events', resolution: '4K UHD', category: 'USA Sports' },
      { name: 'Golf Channel USA', resolution: 'FHD 1080p', category: 'USA Sports' },
      { name: 'Tennis Channel HD', resolution: 'FHD 1080p', category: 'USA Sports' },
      { name: 'CBS Sports Network (CBSSN)', resolution: 'FHD 1080p', category: 'USA Sports' },
      { name: 'Bally Sports Regional Networks', resolution: '4K UHD', category: 'USA Sports' },
      { name: 'YES Network (New York Yankees)', resolution: '4K UHD', category: 'USA Sports' },
      { name: 'NESN (Boston Red Sox & Bruins)', resolution: '4K UHD', category: 'USA Sports' },
      { name: 'Marquee Sports (Chicago Cubs)', resolution: 'FHD 1080p', category: 'USA Sports' }
    ]
  },
  {
    id: 'usa-locals',
    name: 'USA Major Local Networks',
    badge: 'All 50 States',
    count: '1,200+ Stations',
    channels: [
      { name: 'ABC East & West (NY, LA, Chicago, Miami)', resolution: '4K UHD', category: 'Local News', isPopular: true },
      { name: 'CBS East & West (NY, LA, Dallas, Atlanta)', resolution: '4K UHD', category: 'Local News', isPopular: true },
      { name: 'NBC East & West (NY, LA, Houston, Philly)', resolution: '4K UHD', category: 'Local News', isPopular: true },
      { name: 'FOX East & West (National + Local Feeds)', resolution: '4K UHD', category: 'Local News', isPopular: true },
      { name: 'The CW Network', resolution: 'FHD 1080p', category: 'Local News' },
      { name: 'PBS National & Kids', resolution: 'FHD 1080p', category: 'Local News' },
      { name: 'Telemundo Local Affiliates', resolution: 'FHD 1080p', category: 'Local News' },
      { name: 'Univision National & Regional', resolution: 'FHD 1080p', category: 'Local News' }
    ]
  },
  {
    id: 'usa-entertainment',
    name: 'Entertainment & Premium Movies',
    badge: 'Cinema & Series',
    count: '800+ Channels',
    channels: [
      { name: 'HBO Main, HBO 2, Signature, Comedy', resolution: '4K UHD', category: 'Movies', isPopular: true },
      { name: 'Cinemax, ActionMAX, ThrillerMAX', resolution: '4K UHD', category: 'Movies' },
      { name: 'Showtime East & West, Showcase', resolution: '4K UHD', category: 'Movies', isPopular: true },
      { name: 'Starz, Starz Cinema, Starz Edge', resolution: '4K UHD', category: 'Movies' },
      { name: 'Paramount Network HD', resolution: 'FHD 1080p', category: 'Entertainment' },
      { name: 'FX & FXX Networks', resolution: '4K UHD', category: 'Entertainment', isPopular: true },
      { name: 'USA Network HD', resolution: '4K UHD', category: 'Entertainment', isPopular: true },
      { name: 'TNT & TBS East / West', resolution: '4K UHD', category: 'Entertainment' },
      { name: 'AMC & AMC Premiere', resolution: 'FHD 1080p', category: 'Entertainment' },
      { name: 'Discovery Channel & Science HD', resolution: '4K UHD', category: 'Documentary' },
      { name: 'History Channel & National Geographic', resolution: '4K UHD', category: 'Documentary' }
    ]
  },
  {
    id: 'uk-canada',
    name: 'UK, Canada & International',
    badge: 'Premier League',
    count: '2,500+ Channels',
    channels: [
      { name: 'Sky Sports Main Event, Premier League, F1', resolution: '4K UHD', category: 'UK Sports', isPopular: true },
      { name: 'TNT Sports 1, 2, 3, 4 & Ultimate', resolution: '4K UHD', category: 'UK Sports', isPopular: true },
      { name: 'BBC One, BBC Two & ITV 1/2/3/4', resolution: 'FHD 1080p', category: 'UK General' },
      { name: 'TSN 1, 2, 3, 4, 5 Canada', resolution: '4K UHD', category: 'Canada Sports' },
      { name: 'Sportsnet Ontario, West, East, Pacific', resolution: '4K UHD', category: 'Canada Sports' },
      { name: 'TUDN & ESPN Deportes USA', resolution: 'FHD 1080p', category: 'Latino Sports' },
      { name: 'beIN Sports USA & En Español', resolution: '4K UHD', category: 'Soccer' }
    ]
  }
];

