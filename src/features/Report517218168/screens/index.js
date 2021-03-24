import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_154_967}>
        <View style={styles.View_154_968}>
          <View style={styles.View_154_969}>
            <View style={styles.View_I154_969_153_5917}>
              <View style={styles.View_I154_969_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I154_969_153_5900}
                />
                <View style={styles.View_I154_969_153_5941} />
              </View>
              <View style={styles.View_I154_969_153_5902}>
                <View style={styles.View_I154_969_153_5903}>
                  <View style={styles.View_I154_969_153_5904}>
                    <Text style={styles.Text_I154_969_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_969_153_5905}
                  />
                </View>
                <View style={styles.View_I154_969_153_5906}>
                  <Text style={styles.Text_I154_969_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_969_153_5907}>
              <View style={styles.View_I154_969_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_969_153_5908_138_29}
                />
                <View style={styles.View_I154_969_153_5908_0_2104}>
                  <Text style={styles.Text_I154_969_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_969_153_5909}>
                <View style={styles.View_I154_969_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_970}>
            <View style={styles.View_I154_970_153_5917}>
              <View style={styles.View_I154_970_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I154_970_153_6015}
                />
                <View style={styles.View_I154_970_153_5941} />
              </View>
              <View style={styles.View_I154_970_153_5902}>
                <View style={styles.View_I154_970_153_5903}>
                  <View style={styles.View_I154_970_153_5904}>
                    <Text style={styles.Text_I154_970_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_970_153_5905}
                  />
                </View>
                <View style={styles.View_I154_970_153_5906}>
                  <Text style={styles.Text_I154_970_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_970_153_5907}>
              <View style={styles.View_I154_970_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_970_153_5908_138_29}
                />
                <View style={styles.View_I154_970_153_5908_0_2104}>
                  <Text style={styles.Text_I154_970_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_970_153_5909}>
                <View style={styles.View_I154_970_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_971}>
            <View style={styles.View_I154_971_153_5917}>
              <View style={styles.View_I154_971_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I154_971_153_6014}
                />
                <View style={styles.View_I154_971_153_5941} />
              </View>
              <View style={styles.View_I154_971_153_5902}>
                <View style={styles.View_I154_971_153_5903}>
                  <View style={styles.View_I154_971_153_5904}>
                    <Text style={styles.Text_I154_971_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_971_153_5905}
                  />
                </View>
                <View style={styles.View_I154_971_153_5906}>
                  <Text style={styles.Text_I154_971_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_971_153_5907}>
              <View style={styles.View_I154_971_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_971_153_5908_138_29}
                />
                <View style={styles.View_I154_971_153_5908_0_2104}>
                  <Text style={styles.Text_I154_971_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_971_153_5909}>
                <View style={styles.View_I154_971_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_972}>
            <View style={styles.View_I154_972_153_5917}>
              <View style={styles.View_I154_972_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I154_972_153_5899}
                />
                <View style={styles.View_I154_972_153_5941} />
              </View>
              <View style={styles.View_I154_972_153_5902}>
                <View style={styles.View_I154_972_153_5903}>
                  <View style={styles.View_I154_972_153_5904}>
                    <Text style={styles.Text_I154_972_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_972_153_5905}
                  />
                </View>
                <View style={styles.View_I154_972_153_5906}>
                  <Text style={styles.Text_I154_972_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_972_153_5907}>
              <View style={styles.View_I154_972_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_972_153_5908_138_29}
                />
                <View style={styles.View_I154_972_153_5908_0_2104}>
                  <Text style={styles.Text_I154_972_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_972_153_5909}>
                <View style={styles.View_I154_972_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_190_60}>
          <View style={styles.View_I190_60_153_130}>
            <View style={styles.View_I190_60_153_130_0_230} />
          </View>
          <View style={styles.View_I190_60_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I190_60_189_362_138_29}
            />
            <View style={styles.View_I190_60_189_362_0_2104}>
              <Text style={styles.Text_I190_60_189_362_0_2104}>Building</Text>
            </View>
          </View>
          <View style={styles.View_I190_60_186_25}>
            <View style={styles.View_I190_60_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                }}
                style={styles.ImageBackground_I190_60_153_132}
              />
            </View>
            <View style={styles.View_I190_60_153_136}>
              <View style={styles.View_I190_60_153_14}>
                <Text style={styles.Text_I190_60_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I190_60_153_1}>
                <Text style={styles.Text_I190_60_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I190_60_139_759}>
            <View style={styles.View_I190_60_139_761} />
            <View style={styles.View_I190_60_139_760}>
              <Text style={styles.Text_I190_60_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I190_60_189_305}>
              <Text style={styles.Text_I190_60_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I190_60_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I190_60_229_2631}
            />
            <View style={styles.View_I190_60_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I190_60_229_1982_229_1973}
              />
              <View style={styles.View_I190_60_229_1982_229_1975}>
                <View style={styles.View_I190_60_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I190_60_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I190_60_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_173_150}>
        <View style={styles.View_I173_150_153_138} />
      </View>
      <View style={styles.View_154_982}>
        <View style={styles.View_154_1004}>
          <View style={styles.View_178_173}>
            <View style={styles.View_214_92}>
              <View style={styles.View_I214_92_154_36}>
                <View style={styles.View_I214_92_154_27}>
                  <Text style={styles.Text_I214_92_154_27}>Total Area</Text>
                </View>
                <View style={styles.View_I214_92_154_30}>
                  <Text style={styles.Text_I214_92_154_30}>1250 sq. ft.</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I214_92_154_37}
              />
            </View>
            <View style={styles.View_214_93}>
              <View style={styles.View_I214_93_154_36}>
                <View style={styles.View_I214_93_154_27}>
                  <Text style={styles.Text_I214_93_154_27}>Total Rooms</Text>
                </View>
                <View style={styles.View_I214_93_154_30}>
                  <Text style={styles.Text_I214_93_154_30}>56 rooms</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I214_93_154_37}
              />
            </View>
            <View style={styles.View_214_94}>
              <View style={styles.View_I214_94_154_36}>
                <View style={styles.View_I214_94_154_27}>
                  <Text style={styles.Text_I214_94_154_27}>
                    Cleaning Hours Needed
                  </Text>
                </View>
                <View style={styles.View_I214_94_154_30}>
                  <Text style={styles.Text_I214_94_154_30}>16 hrs</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I214_94_154_37}
              />
            </View>
            <View style={styles.View_178_177}>
              <View style={styles.View_I178_177_178_7}>
                <View style={styles.View_I178_177_178_7_154_36}>
                  <View style={styles.View_I178_177_178_7_154_27}>
                    <Text style={styles.Text_I178_177_178_7_154_27}>
                      Product usage estimates
                    </Text>
                  </View>
                  <View style={styles.View_I178_177_178_7_154_30}>
                    <Text style={styles.Text_I178_177_178_7_154_30}>
                      12 products
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6721/fa68/d40a99dd0253a37843f5914b605a8dcd"
                  }}
                  style={styles.ImageBackground_I178_177_178_7_154_37}
                />
              </View>
            </View>
            <View style={styles.View_214_96}>
              <View style={styles.View_I214_96_154_36}>
                <View style={styles.View_I214_96_154_27}>
                  <Text style={styles.Text_I214_96_154_27}>
                    Average Inspection Rating
                  </Text>
                </View>
                <View style={styles.View_I214_96_154_30}>
                  <Text style={styles.Text_I214_96_154_30}>85 %</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I214_96_154_37}
              />
            </View>
          </View>
          <View style={styles.View_206_591}>
            <View style={styles.View_I206_591_153_138} />
          </View>
          <View style={styles.View_154_1011}>
            <View style={styles.View_154_1012}>
              <View style={styles.View_190_569}>
                <View style={styles.View_I190_569_154_428}>
                  <Text style={styles.Text_I190_569_154_428}>PRODUCT TYPE</Text>
                </View>
                <View style={styles.View_I190_569_154_433}>
                  <Text style={styles.Text_I190_569_154_433}>TOTAL COUNT</Text>
                </View>
              </View>
              <View style={styles.View_154_1013}>
                <View style={styles.View_I154_1013_190_250}>
                  <View style={styles.View_I154_1013_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1013_154_428}>
                  <Text style={styles.Text_I154_1013_154_428}>
                    Paper towels
                  </Text>
                </View>
                <View style={styles.View_I154_1013_154_433}>
                  <Text style={styles.Text_I154_1013_154_433}>56</Text>
                </View>
              </View>
              <View style={styles.View_154_1014}>
                <View style={styles.View_I154_1014_190_250}>
                  <View style={styles.View_I154_1014_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1014_154_428}>
                  <Text style={styles.Text_I154_1014_154_428}>
                    Toilet tissue
                  </Text>
                </View>
                <View style={styles.View_I154_1014_154_433}>
                  <Text style={styles.Text_I154_1014_154_433}>80</Text>
                </View>
              </View>
              <View style={styles.View_154_1015}>
                <View style={styles.View_I154_1015_190_250}>
                  <View style={styles.View_I154_1015_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1015_154_428}>
                  <Text style={styles.Text_I154_1015_154_428}>Hand soap</Text>
                </View>
                <View style={styles.View_I154_1015_154_433}>
                  <Text style={styles.Text_I154_1015_154_433}>24</Text>
                </View>
              </View>
              <View style={styles.View_154_1016}>
                <View style={styles.View_I154_1016_190_250}>
                  <View style={styles.View_I154_1016_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1016_154_428}>
                  <Text style={styles.Text_I154_1016_154_428}>
                    Hand sanitizer
                  </Text>
                </View>
                <View style={styles.View_I154_1016_154_433}>
                  <Text style={styles.Text_I154_1016_154_433}>28</Text>
                </View>
              </View>
              <View style={styles.View_154_1017}>
                <View style={styles.View_I154_1017_190_250}>
                  <View style={styles.View_I154_1017_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1017_154_428}>
                  <Text style={styles.Text_I154_1017_154_428}>
                    Floor cleaner
                  </Text>
                </View>
                <View style={styles.View_I154_1017_154_433}>
                  <Text style={styles.Text_I154_1017_154_433}>12</Text>
                </View>
              </View>
              <View style={styles.View_154_1018}>
                <View style={styles.View_I154_1018_190_250}>
                  <View style={styles.View_I154_1018_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1018_154_428}>
                  <Text style={styles.Text_I154_1018_154_428}>
                    Neutral cleaner
                  </Text>
                </View>
                <View style={styles.View_I154_1018_154_433}>
                  <Text style={styles.Text_I154_1018_154_433}>08</Text>
                </View>
              </View>
              <View style={styles.View_154_1019}>
                <View style={styles.View_I154_1019_190_250}>
                  <View style={styles.View_I154_1019_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1019_154_428}>
                  <Text style={styles.Text_I154_1019_154_428}>
                    Disinfectant
                  </Text>
                </View>
                <View style={styles.View_I154_1019_154_433}>
                  <Text style={styles.Text_I154_1019_154_433}>08</Text>
                </View>
              </View>
              <View style={styles.View_154_1209}>
                <View style={styles.View_I154_1209_190_250}>
                  <View style={styles.View_I154_1209_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1209_154_428}>
                  <Text style={styles.Text_I154_1209_154_428}>
                    Glass cleaner
                  </Text>
                </View>
                <View style={styles.View_I154_1209_154_433}>
                  <Text style={styles.Text_I154_1209_154_433}>06</Text>
                </View>
              </View>
              <View style={styles.View_154_1210}>
                <View style={styles.View_I154_1210_190_250}>
                  <View style={styles.View_I154_1210_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1210_154_428}>
                  <Text style={styles.Text_I154_1210_154_428}>
                    Floor finish
                  </Text>
                </View>
                <View style={styles.View_I154_1210_154_433}>
                  <Text style={styles.Text_I154_1210_154_433}>15</Text>
                </View>
              </View>
              <View style={styles.View_154_1211}>
                <View style={styles.View_I154_1211_190_250}>
                  <View style={styles.View_I154_1211_190_250_0_230} />
                </View>
                <View style={styles.View_I154_1211_154_428}>
                  <Text style={styles.Text_I154_1211_154_428}>
                    Floor stripper
                  </Text>
                </View>
                <View style={styles.View_I154_1211_154_433}>
                  <Text style={styles.Text_I154_1211_154_433}>12</Text>
                </View>
              </View>
              <View style={styles.View_190_577}>
                <View style={styles.View_I190_577_190_250}>
                  <View style={styles.View_I190_577_190_250_0_230} />
                </View>
                <View style={styles.View_I190_577_154_428}>
                  <Text style={styles.Text_I190_577_154_428}>
                    Auto scrubber pads
                  </Text>
                </View>
                <View style={styles.View_I190_577_154_433}>
                  <Text style={styles.Text_I190_577_154_433}>04</Text>
                </View>
              </View>
              <View style={styles.View_214_127}>
                <View style={styles.View_I214_127_190_250}>
                  <View style={styles.View_I214_127_190_250_0_230} />
                </View>
                <View style={styles.View_I214_127_154_428}>
                  <Text style={styles.Text_I214_127_154_428}>
                    Floor stripping pads
                  </Text>
                </View>
                <View style={styles.View_I214_127_154_433}>
                  <Text style={styles.Text_I214_127_154_433}>04</Text>
                </View>
              </View>
              <View style={styles.View_214_132}>
                <View style={styles.View_I214_132_190_250}>
                  <View style={styles.View_I214_132_190_250_0_230} />
                </View>
                <View style={styles.View_I214_132_154_428}>
                  <Text style={styles.Text_I214_132_154_428}>
                    Feminine hygiene liners
                  </Text>
                </View>
                <View style={styles.View_I214_132_154_433}>
                  <Text style={styles.Text_I214_132_154_433}>04</Text>
                </View>
              </View>
              <View style={styles.View_214_137}>
                <View style={styles.View_I214_137_190_250}>
                  <View style={styles.View_I214_137_190_250_0_230} />
                </View>
                <View style={styles.View_I214_137_154_428}>
                  <Text style={styles.Text_I214_137_154_428}>Can liners</Text>
                </View>
                <View style={styles.View_I214_137_154_433}>
                  <Text style={styles.Text_I214_137_154_433}>04</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_154_1020}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                }}
                style={styles.ImageBackground_I154_1020_138_29}
              />
              <View style={styles.View_I154_1020_0_2104}>
                <Text style={styles.Text_I154_1020_0_2104}>PRODUCT</Text>
              </View>
            </View>
            <View style={styles.View_154_1021}>
              <Text style={styles.Text_154_1021}>Product usage estimates</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_173_148}>
          <View style={styles.View_I173_148_196_1177}>
            <View style={styles.View_I173_148_196_1177_153_6159}>
              <View style={styles.View_I173_148_196_1177_0_890}>
                <Text style={styles.Text_I173_148_196_1177_0_890}>
                  overview
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_148_196_1177_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6134}>
            <View style={styles.View_I173_148_153_6134_153_6263}>
              <View style={styles.View_I173_148_153_6134_0_897}>
                <Text style={styles.Text_I173_148_153_6134_0_897}>reports</Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6134_0_896}>
              <View style={styles.View_I173_148_153_6134_0_896_0_342} />
            </View>
          </View>
          <View style={styles.View_I173_148_153_6135}>
            <View style={styles.View_I173_148_153_6135_153_6159}>
              <View style={styles.View_I173_148_153_6135_0_890}>
                <Text style={styles.Text_I173_148_153_6135_0_890}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6135_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6136}>
            <View style={styles.View_I173_148_153_6136_153_6159}>
              <View style={styles.View_I173_148_153_6136_0_890}>
                <Text style={styles.Text_I173_148_153_6136_0_890}>People</Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6136_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6144}>
            <View style={styles.View_I173_148_153_6144_153_6159}>
              <View style={styles.View_I173_148_153_6144_0_890}>
                <Text style={styles.Text_I173_148_153_6144_0_890}>
                  Budgeting
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6144_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6147}>
            <View style={styles.View_I173_148_153_6147_153_6159}>
              <View style={styles.View_I173_148_153_6147_0_890}>
                <Text style={styles.Text_I173_148_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6147_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6150}>
            <View style={styles.View_I173_148_153_6150_153_6159}>
              <View style={styles.View_I173_148_153_6150_0_890}>
                <Text style={styles.Text_I173_148_153_6150_0_890}>savings</Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6150_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6153}>
            <View style={styles.View_I173_148_153_6153_153_6159}>
              <View style={styles.View_I173_148_153_6153_0_890}>
                <Text style={styles.Text_I173_148_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6153_0_892} />
          </View>
          <View style={styles.View_I173_148_153_6156}>
            <View style={styles.View_I173_148_153_6156_153_6159}>
              <View style={styles.View_I173_148_153_6156_0_890}>
                <Text style={styles.Text_I173_148_153_6156_0_890}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I173_148_153_6156_0_892} />
          </View>
        </View>
        <View style={styles.View_173_149}>
          <View style={styles.View_I173_149_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ecf/4ac9/d7ae554c7514d6ff2bc8a65a3c5bb273"
              }}
              style={styles.ImageBackground_I173_149_153_6113}
            />
            <View style={styles.View_I173_149_153_6114} />
          </View>
          <View style={styles.View_I173_149_153_6116}>
            <View style={styles.View_I173_149_153_6117}>
              <Text style={styles.Text_I173_149_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I173_149_153_6118}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_154_967: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    height: 1024,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_154_968: {
    flexGrow: 1,
    width: wp("29.166666666666668%"),
    height: 844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 180,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_154_969: {
    width: wp("26.944444444444443%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I154_969_153_5917: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_969_153_5898: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I154_969_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_969_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_969_153_5902: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_969_153_5903: {
    flexGrow: 1,
    width: wp("24.72222222222222%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_969_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_969_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_969_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_969_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_969_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_969_153_5907: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 192,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_969_153_5908: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I154_969_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_969_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_969_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_969_153_5909: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_969_153_5909_0_230: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_154_970: {
    width: wp("26.944444444444443%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 272,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I154_970_153_5917: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_970_153_5898: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I154_970_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_970_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_970_153_5902: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_970_153_5903: {
    flexGrow: 1,
    width: wp("24.72222222222222%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_970_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_970_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_970_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_970_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_970_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_970_153_5907: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 192,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_970_153_5908: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I154_970_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_970_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_970_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_970_153_5909: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_970_153_5909_0_230: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_154_971: {
    width: wp("26.944444444444443%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 528,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I154_971_153_5917: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_971_153_5898: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I154_971_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_971_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_971_153_5902: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_971_153_5903: {
    flexGrow: 1,
    width: wp("24.72222222222222%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_971_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_971_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_971_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_971_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_971_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_971_153_5907: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 192,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_971_153_5908: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I154_971_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_971_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_971_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_971_153_5909: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_971_153_5909_0_230: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_154_972: {
    width: wp("26.944444444444443%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 784,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I154_972_153_5917: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_972_153_5898: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I154_972_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_972_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_972_153_5902: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_972_153_5903: {
    flexGrow: 1,
    width: wp("24.72222222222222%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_972_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_972_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_972_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_972_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_972_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_972_153_5907: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 192,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_972_153_5908: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I154_972_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_972_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_972_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_972_153_5909: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_972_153_5909_0_230: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_190_60: {
    flexGrow: 1,
    width: wp("29.166666666666668%"),
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I190_60_153_130: {
    flexGrow: 1,
    width: wp("29.166666666666668%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 179,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_60_153_130_0_230: {
    flexGrow: 1,
    width: wp("29.166666666666668%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I190_60_189_362: {
    flexGrow: 1,
    width: wp("8.819444444444445%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.23611111111111%"),
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I190_60_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I190_60_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I190_60_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I190_60_186_25: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 106,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_60_189_292: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I190_60_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_60_153_136: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_60_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I190_60_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I190_60_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I190_60_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I190_60_139_759: {
    flexGrow: 1,
    width: wp("19.51388888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_60_139_761: {
    width: wp("2.083333333333333%"),
    minWidth: wp("2.083333333333333%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(19, 97, 98, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_I190_60_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I190_60_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_60_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I190_60_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_60_229_3960: {
    flexGrow: 1,
    width: wp("2.5%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I190_60_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_60_229_1982: {
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_60_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I190_60_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I190_60_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I190_60_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I190_60_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_150: {
    width: wp("0.06944444444444445%"),
    minWidth: wp("0.06944444444444445%"),
    height: 1024,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.166666666666668%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_150_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 1024,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_154_982: {
    width: wp("70.76388888888889%"),
    minWidth: wp("70.76388888888889%"),
    height: 1024,
    minHeight: 1024,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.236111111111114%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_154_1004: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 228,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_178_173: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 796,
    minHeight: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_92: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_I214_92_154_36: {
    flexGrow: 1,
    width: wp("9.027777777777777%"),
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_92_154_27: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I214_92_154_27: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I214_92_154_30: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 28
  },
  Text_I214_92_154_30: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I214_92_154_37: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_214_93: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 144,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_I214_93_154_36: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_93_154_27: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I214_93_154_27: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I214_93_154_30: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 28
  },
  Text_I214_93_154_30: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I214_93_154_37: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_214_94: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 272,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_I214_94_154_36: {
    flexGrow: 1,
    width: wp("12.01388888888889%"),
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_94_154_27: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I214_94_154_27: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I214_94_154_30: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 28
  },
  Text_I214_94_154_30: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I214_94_154_37: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_178_177: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 400,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_177_178_7: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(108, 178, 178, 1)",
    overflow: "hidden"
  },
  View_I178_177_178_7_154_36: {
    flexGrow: 1,
    width: wp("12.708333333333332%"),
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_177_178_7_154_27: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I178_177_178_7_154_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I178_177_178_7_154_30: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 28
  },
  Text_I178_177_178_7_154_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I178_177_178_7_154_37: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_214_96: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 528,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_I214_96_154_36: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_96_154_27: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I214_96_154_27: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I214_96_154_30: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 28
  },
  Text_I214_96_154_30: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I214_96_154_37: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_206_591: {
    width: wp("0.06944444444444445%"),
    minWidth: wp("0.06944444444444445%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.194444444444436%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I206_591_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_154_1011: {
    width: wp("42.5%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888888%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_154_1012: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 704,
    minHeight: 704,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_190_569: {
    width: wp("42.5%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_569_154_428: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 4
  },
  Text_I190_569_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I190_569_154_433: {
    flexGrow: 1,
    width: wp("6.458333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.930555555555564%"),
    top: 4
  },
  Text_I190_569_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_154_1013: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1013_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1013_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1013_154_428: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1013_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1013_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1013_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1014: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1014_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1014_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1014_154_428: {
    flexGrow: 1,
    width: wp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1014_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1014_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1014_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1015: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1015_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1015_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1015_154_428: {
    flexGrow: 1,
    width: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1015_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1015_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1015_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1016: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 176,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1016_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1016_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1016_154_428: {
    flexGrow: 1,
    width: wp("7.361111111111112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1016_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1016_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1016_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1017: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 224,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1017_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1017_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1017_154_428: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1017_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1017_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1017_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1018: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 272,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1018_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1018_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1018_154_428: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1018_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1018_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1018_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1019: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 320,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1019_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1019_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1019_154_428: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1019_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1019_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1019_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1209: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 368,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1209_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1209_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1209_154_428: {
    flexGrow: 1,
    width: wp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1209_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1209_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1209_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1210: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 416,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1210_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1210_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1210_154_428: {
    flexGrow: 1,
    width: wp("5.763888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1210_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1210_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1210_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1211: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 464,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I154_1211_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1211_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I154_1211_154_428: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I154_1211_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1211_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I154_1211_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_190_577: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 512,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_577_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_577_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I190_577_154_428: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I190_577_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I190_577_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I190_577_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_214_127: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 560,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_127_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_127_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I214_127_154_428: {
    flexGrow: 1,
    width: wp("10.208333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I214_127_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I214_127_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I214_127_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_214_132: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 608,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_132_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_132_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I214_132_154_428: {
    flexGrow: 1,
    width: wp("12.01388888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I214_132_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I214_132_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I214_132_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_214_137: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 656,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_137_190_250: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_137_190_250_0_230: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I214_137_154_428: {
    flexGrow: 1,
    width: wp("5.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I214_137_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I214_137_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I214_137_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_154_1020: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.56944444444445%"),
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I154_1020_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_I154_1020_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777857%"),
    top: 10
  },
  Text_I154_1020_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_154_1021: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 24
  },
  Text_154_1021: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_173_148: {
    flexGrow: 1,
    width: wp("70.69444444444444%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 180,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I173_148_196_1177: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_196_1177_153_6159: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_196_1177_0_890: {
    flexGrow: 1,
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_148_196_1177_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_196_1177_0_892: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6134: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888886%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I173_148_153_6134_153_6263: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6134_0_897: {
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_148_153_6134_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6134_0_896: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I173_148_153_6134_0_896_0_342: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(19, 97, 98, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I173_148_153_6135: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777771%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6135_153_6159: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_148_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6135_0_892: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6136: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.95833333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6136_153_6159: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_148_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6136_0_892: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6144: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.20833333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6144_153_6159: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_148_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6144_0_892: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6147: {
    flexGrow: 1,
    width: wp("12.291666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.47222222222223%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6147_153_6159: {
    flexGrow: 1,
    width: wp("12.291666666666666%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I173_148_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6147_0_892: {
    flexGrow: 1,
    width: wp("12.291666666666666%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6150: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.763888888888886%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6150_153_6159: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_148_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6150_0_892: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6153: {
    flexGrow: 1,
    width: wp("13.055555555555557%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.56944444444444%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6153_153_6159: {
    flexGrow: 1,
    width: wp("13.055555555555557%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_148_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6153_0_892: {
    flexGrow: 1,
    width: wp("13.055555555555557%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I173_148_153_6156: {
    flexGrow: 1,
    width: wp("4.236111111111112%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.625%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6156_153_6159: {
    flexGrow: 1,
    width: wp("4.236111111111112%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_148_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I173_148_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_148_153_6156_0_892: {
    flexGrow: 1,
    width: wp("4.236111111111112%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_173_149: {
    flexGrow: 1,
    width: wp("70.69444444444444%"),
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_149_153_6108: {
    flexGrow: 1,
    width: wp("70.69444444444444%"),
    height: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I173_149_153_6113: {
    width: wp("70.69444444444444%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I173_149_153_6114: {
    width: wp("70.69444444444444%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I173_149_153_6116: {
    flexGrow: 1,
    width: wp("68.47222222222223%"),
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_149_153_6117: {
    width: wp("65.69444444444444%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I173_149_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I173_149_153_6118: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.80555555555554%")
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
