import delay from './delay';

const articles = 
  {
    "status": "OK",
    "usage": "By accessing AlchemyAPI or using information generated by AlchemyAPI, you are agreeing to be bound by the AlchemyAPI Terms of Use: http://www.alchemyapi.com/company/terms.html",
    "totalTransactions": "54",
    "result": {
      "docs": [
        {
          "id": "NTMwNDQ2NTE2M3wxNDcwOTYwMjQz",
          "source": {
            "enriched": {
              "url": {
                "text": "              Source: Politico\nHillary Clinton on Thursday forcefully rejected the notion that she will support the Trans-Pacific Partnership if she\u0092s elected in November, telling a blue-collar crowd in Michigan that \u0093I oppose it now, I\u0092ll oppose it after the election, and I\u0092ll oppose it as president.\u0094 \nDonald Trump has accused Clinton of lying about her opposition to the 12-nation trade pact, which President Barack Obama has aggressively pushed. Following a POLITICO report last month in which Clinton ally and Virginia Gov. ...",
                "title": "Clinton forcefully disavows Obama's trade deal - Democratic Underground"
              }
            },
            "original": {
              "url": "http://www.democraticunderground.com/10141548100"
            }
          },
          "timestamp": 1470960243
        },
        {
          "id": "NTMxNTg0OTcxNXwxNDcwOTYwMDU0",
          "source": {
            "enriched": {
              "url": {
                "text": "   Obama Speaks About U.S. Exports, Trade Agreements - Bloomberg\n                                     For more local news from India, visit Bloombergquint.com  \n \n \n \n  \n \n   \n\n\n \n                         Bloomberg the Company & Its Products Bloomberg Anywhere Remote Login Bloomberg Anywhere Login  Bloomberg Terminal Demo Request                  \n                                                 Bloomberg\n     Connecting decision makers to a dynamic network of information, people and ideas, Bloomberg quickly and accurately delivers business and financial information, news and insight around the world. Customer Support\n     Americas\n +1 212 318 2000\nEurope, Middle East, & Africa\n +44 20 7330 7500\nAsia Pacific\n +65 6212 1000\n\n    \n                                       Company\n     Careers \nDiversity & Inclusion \nSustainability \nTechnology \nHistory & Facts \nPhilanthropy & Engagement \nBloomberg London\n\n                 Communications\n     Press Announcements \nPress Contacts\n\n                 Follow Us\n     Facebook \nTwitter \nLinkedIn \nInstagram \nVimeo\n\n    \n                                       Financial Products\n     Bloomberg Terminal \nBloomberg Tradebook \nBloomberg Briefs \nBloomberg Indices \nBloomberg SEF \nBloomberg Institute\n\n                 Bloomberg Customers\n     Bloomberg Anywhere Remote Login \nDownload Software \nService Center\n\n    \n                                       Enterprise Products\n     Enterprise Solutions \nTrading Solutions \nBloomberg Vault \nBloomberg PolarLake\n\n                 Industry Products\n     Bloomberg Government \nBloomberg Law/BNA \nBloomberg Big Law \nBloomberg New Energy Finance\n\n    \n                                       Media\n     Bloomberg.com \nBloomberg Politics \nBloomberg View \nBloomberg Gadfly \nBloomberg Television \nBloomberg Radio \nBloomberg Mobile Apps \nNews Bureaus\n\n                 Media Services\n     Bloomberg Live Conferences \nBloomberg Media Distribution \nAdvertising\n\n    \n             \n                                                 Bloomberg\n     Connecting decision makers to a dynamic network of information, people and ideas, Bloomberg quickly and accurately delivers business and financial information, news and insight around the world. ...",
                "title": "Obama Speaks About U.S. Exports, Trade Agreements"
              }
            },
            "original": {
              "url": "http://www.bloomberg.com/news/videos/b/361e3081-e97b-4fed-af62-071cc6d11c6d"
            }
          },
          "timestamp": 1470960054
        },
        {
          "id": "NTE4NDEzOTU0M3wxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "Republican presidential candidate Donald Trump has called US President Barack Obama and Democratic candidate Hillary Clinton \"co-founders\" of Islamic State, igniting fresh criticism of his inflammatory campaign style. The New York real estate developer has previously attacked Obama and Clinton, secretary of state from 2009-13, for how the United States pulled out of Iraq after the war, saying it helped create the militant Islamist group that has seized swaths of Iraq and Syria. ...",
                "title": "Obama, Clinton co-founders of IS: Trump"
              }
            },
            "original": {
              "url": "http://www.sbs.com.au/news/article/2016/08/12/obama-clinton-co-founders-trump"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTE4MDA0NTMyNXwxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "WASHINGTON/MIAMI BEACH, Fla. Republican Donald Trump called U.S. President Barack Obama and Democrat Hillary Clinton the \"co-founders\" of Islamic State, ratcheting up his assertion that they are responsible for the rise of the militant group and sparking renewed criticism of his leadership ability. ...",
                "title": "Trump calls Obama, Clinton Islamic State 'co-founders,' draws rebuke | Reuters - Firstpost"
              }
            },
            "original": {
              "url": "http://www.firstpost.com/world/trump-calls-obama-clinton-islamic-state-co-founders-draws-rebuke-reuters-2950962.html"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTE3MTAyNjgzMXwxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "Donald Trump, Hillary Clinton spar over Islamic State founders claim\n         Posted             August 12, 2016 06:27:11            \nHillary Clinton has admonished rival Donald Trump for claiming that she and Barack Obama were the founders of the Islamic State group, saying anyone who would \"sink so low\" should never be president. \"No, Barack Obama is not the founder of ISIS,\" Mrs Clinton tweeted. ...",
                "title": "Trump doubles down on claim Obama founded Islamic State"
              }
            },
            "original": {
              "url": "http://www.abc.net.au/news/2016-08-12/clinton-trump-spar-over-his-islamic-state-founders-claim/7722632"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTI4NzI1ODc1N3wxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "WASHINGTON: Donald Trump says President Barack Obama is the \"founder\" of the Islamic State group. He's not, of course. ...",
                "title": "Fact check: Trump wrongly calls Obama 'founder' of IS"
              }
            },
            "original": {
              "url": "http://www.newindianexpress.com/world/Fact-check-Trump-wrongly-calls-Obama-founder-of-IS/2016/08/12/article3575728.ece"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTI4NDA3MTM0NHwxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": " \t\t\t \t\t\t                                                 \t            \t\t\u00A0\u00A0August 11, 2016: 7:11 PM EST       \t\t         \t\tTrump: Obama \"Founded ISIS\", Trump refusing to release tax returns, Clinton: Trump plans \"Trillions in tax cuts\" for the rich             \t\t           \t\t\nExplore topics and guests discussed in this episode: \n \t\t \t \t Recent Situation Room w/ Wolf Blitzer Episodes\t \t\t\t\t            \t\tAugust 10, 2016            \t\tClimber scaling Trump tower, Source: Secret service talked to Trump camp        \t \t\t            \t\tAugust 09, 2016            \t\tTrump: \"Second amendment people\" could stop Clinton, SEN. Susan Collins: Can't vote for \"Cruel\" Trump, unsung heros of war        \t \t\t            \t\tAugust 08, 2016            \t\tClinton: Trump plans would throw U.S. into recession, Trump: National security critics made world as \"Mess\", Iran nuclear scientist executed        \t \t\t            \t\tAugust 05, 2016            \t\tEx-CIA chief: Trump being played by Putin, Police shooting caught on camera, Clinton repeats misleading claim about email probe        \t \t\t            \t\tAugust 03, 2016            \t\tU.S. cash to Iran, Prominent republicans now backing Clinton, Trump calls campaign \"United\"; sources say staffers \"Frustrated\"         \t \t\t            \t\tAugust 02, 2016            \t\tTrump \"unfit\" says Obama, Paul Ryan denounced by Trump, Gold Star families respond        \t \t\t            \t\tAugust 01, 2016            \t\tClinton leads Tump in new CNN/ORC poll: 52 to 43, Gold star families: Trump remarks are \"Repugnant\", Clinton: \"Donald Trump is wrong; America is not weak\"        \t \t\t            \t\tJuly 29, 2016            \t\tSources: FBI investigation on cyber attacks agains Clinton Champaign, Trump today: I'm \"Taking the gloves off\", Crowd at Trump rally chants \"Lock her up\"        \t \t\t            \t\tJuly 28, 2016            \t\tSenior aide: Clinton will not offer apology on emails, democratic convention during its last day, clinton to accept historic nomination        \t \t\t            \t\tJuly 26, 2016            \t\tRoll call for presidential nomination under way, Hillary clinton democratic nomine, Clinton becomes first woman nominated for president by a major party        \t \t\t            \t\tJuly 22, 2016            \t\tAt least nine dead in apparent mall terror attack, Witness: Gunman appeared to target children, Trump: NATO members need to pay more        \t \t\t            \t\tJuly 21, 2016            \t\tAll-Star game lost to bathroom bill, Roger Ailes resigns from Fox News, Cruz mum on Trump        \t \t \t \t\t \t \t \t  \n",
                "title": "Trump: Obama 'Founded ISIS', Trump refusing to release tax returns, Clinton: Trump plans 'Trillions in tax cuts' for the rich | Situation Room w/ Wolf Blitzer"
              }
            },
            "original": {
              "url": "http://podcast.cnn.com/situation-room-wolf-blitzer/episode/all/WM6fRNwciy3SWT/lihuqu.1-1.html"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTE4ODIxNTAzMnwxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "Aleppo, which has been beset by constant violence since 2012, and the site of unspeakable suffering from air strikes, ground fighting, and even chemical weapons attacks, has become a humanitarian nightmare. A shortage of well-supplied hospitals has resulted in countless deaths that might have been prevented had the mortally wounded been able to seek medical treatment \u2014 a shortage of doctors, many of whom have either been killed or fled Aleppo since the fighting erupted, has made the situation even more dire.\n\u201CWe are 15 of the last doctors serving the remaining 300,000 citizens of eastern Aleppo,\u201D a group of doctors claiming to be among the last in the city wrote in a letter to US president Barack Obama on Thursday.\n\u201CWhether we live or die seems to be dependent on the ebbs and flows of the battlefield,\u201D they added. \u201CDespite the horror, we choose to be here. ...",
                "title": "'Last doctors of Aleppo' write heartbreaking letter to Obama: 'We need action' - Business Insider"
              }
            },
            "original": {
              "url": "http://www.businessinsider.sg/last-doctors-of-aleppo-letter-to-obama-heartbreaking-2016-8/"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTEzOTIyNzIwMnwxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "CNN has been fact checking Republican presidential nominee Donald Trump in real time in its television chyrons, and when Trump made news Thursday by saying President Barack Obama founded ISIS, the network corrected him. But the correction itself wasn\u2019t exactly accurate. ...",
                "title": "There's a glaring problem with CNN's 'fact check' of Trump's claim that Obama founded ISIS - Business Insider"
              }
            },
            "original": {
              "url": "http://www.businessinsider.sg/cnn-obama-trump-isis-2016-8/"
            }
          },
          "timestamp": 1470960000
        },
        {
          "id": "NTEwNzM2ODA5N3wxNDcwOTYwMDAw",
          "source": {
            "enriched": {
              "url": {
                "text": "Washington:\u00A0                            Malia Obama, the elder daughter of US President Barack Obama, has been spotted smoking what some suspect to be a cannabis joint. The 18-year-old, who is set to attend Harvard next year, was at the Lollapalooza music festival in Chicago, Illinois, where a nine-second video published by Radar Online, apparently captured her smoking, is doing the rounds on internet and has evoked mixed reactions from public. ...",
                "title": "Barack Obama's Daughter Malia Caught Smoking"
              }
            },
            "original": {
              "url": "http://www.ndtv.com/world-news/barack-obamas-daughter-malia-caught-smoking-1443231"
            }
          },
          "timestamp": 1470960000
        }
      ],
      "next": "NDU3Nzc1MDU2OTYyNDMzNTU4NHxOVEUzTVRBeU5qZ3pNWHd4TkRjd09UWXdNREF3fDgwNTgyMTEyODA3NjY4MjkyODB8TlRFd056TTJPREE1TjN3eE5EY3dPVFl3TURBd3w4NDAyODM1OTkzNTcyMzI0MzI2fHwxMTAwMTUxNDM0ODg1MTY0MjcxM3xOVE14TlRnME9UY3hOWHd4TkRjd09UWXdNRFUw",
      "status": "OK"
    }
  }


class mockNewsApi {
  static getArticles(searchTerm) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign({}, articles));
      }, delay);
    });
  }
}

export default mockNewsApi;
