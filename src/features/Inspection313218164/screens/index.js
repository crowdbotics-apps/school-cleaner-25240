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
      <View style={styles.View_208_10439}>
        <View style={styles.View_208_10440}>
          <View style={styles.View_208_10441}>
            <View style={styles.View_I208_10441_153_5917}>
              <View style={styles.View_I208_10441_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I208_10441_153_5900}
                />
                <View style={styles.View_I208_10441_153_5941} />
              </View>
              <View style={styles.View_I208_10441_153_5902}>
                <View style={styles.View_I208_10441_153_5903}>
                  <View style={styles.View_I208_10441_153_5904}>
                    <Text style={styles.Text_I208_10441_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I208_10441_153_5905}
                  />
                </View>
                <View style={styles.View_I208_10441_153_5906}>
                  <Text style={styles.Text_I208_10441_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I208_10441_153_5907}>
              <View style={styles.View_I208_10441_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I208_10441_153_5908_138_29}
                />
                <View style={styles.View_I208_10441_153_5908_0_2104}>
                  <Text style={styles.Text_I208_10441_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I208_10441_153_5909}>
                <View style={styles.View_I208_10441_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_208_10442}>
            <View style={styles.View_I208_10442_153_5917}>
              <View style={styles.View_I208_10442_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I208_10442_153_6015}
                />
                <View style={styles.View_I208_10442_153_5941} />
              </View>
              <View style={styles.View_I208_10442_153_5902}>
                <View style={styles.View_I208_10442_153_5903}>
                  <View style={styles.View_I208_10442_153_5904}>
                    <Text style={styles.Text_I208_10442_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I208_10442_153_5905}
                  />
                </View>
                <View style={styles.View_I208_10442_153_5906}>
                  <Text style={styles.Text_I208_10442_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I208_10442_153_5907}>
              <View style={styles.View_I208_10442_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I208_10442_153_5908_138_29}
                />
                <View style={styles.View_I208_10442_153_5908_0_2104}>
                  <Text style={styles.Text_I208_10442_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I208_10442_153_5909}>
                <View style={styles.View_I208_10442_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_208_10443}>
            <View style={styles.View_I208_10443_153_5917}>
              <View style={styles.View_I208_10443_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I208_10443_153_6014}
                />
                <View style={styles.View_I208_10443_153_5941} />
              </View>
              <View style={styles.View_I208_10443_153_5902}>
                <View style={styles.View_I208_10443_153_5903}>
                  <View style={styles.View_I208_10443_153_5904}>
                    <Text style={styles.Text_I208_10443_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I208_10443_153_5905}
                  />
                </View>
                <View style={styles.View_I208_10443_153_5906}>
                  <Text style={styles.Text_I208_10443_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I208_10443_153_5907}>
              <View style={styles.View_I208_10443_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I208_10443_153_5908_138_29}
                />
                <View style={styles.View_I208_10443_153_5908_0_2104}>
                  <Text style={styles.Text_I208_10443_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I208_10443_153_5909}>
                <View style={styles.View_I208_10443_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_208_10444}>
            <View style={styles.View_I208_10444_153_5917}>
              <View style={styles.View_I208_10444_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I208_10444_153_5899}
                />
                <View style={styles.View_I208_10444_153_5941} />
              </View>
              <View style={styles.View_I208_10444_153_5902}>
                <View style={styles.View_I208_10444_153_5903}>
                  <View style={styles.View_I208_10444_153_5904}>
                    <Text style={styles.Text_I208_10444_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I208_10444_153_5905}
                  />
                </View>
                <View style={styles.View_I208_10444_153_5906}>
                  <Text style={styles.Text_I208_10444_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I208_10444_153_5907}>
              <View style={styles.View_I208_10444_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I208_10444_153_5908_138_29}
                />
                <View style={styles.View_I208_10444_153_5908_0_2104}>
                  <Text style={styles.Text_I208_10444_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I208_10444_153_5909}>
                <View style={styles.View_I208_10444_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_208_10445}>
          <View style={styles.View_I208_10445_153_130}>
            <View style={styles.View_I208_10445_153_130_0_230} />
          </View>
          <View style={styles.View_I208_10445_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I208_10445_189_362_138_29}
            />
            <View style={styles.View_I208_10445_189_362_0_2104}>
              <Text style={styles.Text_I208_10445_189_362_0_2104}>
                Building
              </Text>
            </View>
          </View>
          <View style={styles.View_I208_10445_186_25}>
            <View style={styles.View_I208_10445_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                }}
                style={styles.ImageBackground_I208_10445_153_132}
              />
            </View>
            <View style={styles.View_I208_10445_153_136}>
              <View style={styles.View_I208_10445_153_14}>
                <Text style={styles.Text_I208_10445_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I208_10445_153_1}>
                <Text style={styles.Text_I208_10445_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I208_10445_139_759}>
            <View style={styles.View_I208_10445_139_761} />
            <View style={styles.View_I208_10445_139_760}>
              <Text style={styles.Text_I208_10445_139_760}>
                leaning Services
              </Text>
            </View>
            <View style={styles.View_I208_10445_189_305}>
              <Text style={styles.Text_I208_10445_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I208_10445_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I208_10445_229_2631}
            />
            <View style={styles.View_I208_10445_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I208_10445_229_1982_229_1973}
              />
              <View style={styles.View_I208_10445_229_1982_229_1975}>
                <View style={styles.View_I208_10445_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I208_10445_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I208_10445_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_208_10446}>
        <View style={styles.View_I208_10446_153_138} />
      </View>
      <View style={styles.View_208_10447}>
        <View style={styles.View_208_10448}>
          <View style={styles.View_208_10449}>
            <View style={styles.View_208_10450}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10450_96_5536}
              />
              <View style={styles.View_I208_10450_173_3081}>
                <View style={styles.View_I208_10450_173_934}>
                  <Text style={styles.Text_I208_10450_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10450_96_5539}>
                  <Text style={styles.Text_I208_10450_96_5539}>86%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10450_173_646}>
                <Text style={styles.Text_I208_10450_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10450_96_5542}>
                <Text style={styles.Text_I208_10450_96_5542}>
                  Inspection #1007
                </Text>
              </View>
              <View style={styles.View_I208_10450_96_5533}>
                <Text style={styles.Text_I208_10450_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10451}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10451_96_5536}
              />
              <View style={styles.View_I208_10451_173_3081}>
                <View style={styles.View_I208_10451_173_934}>
                  <Text style={styles.Text_I208_10451_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10451_96_5539}>
                  <Text style={styles.Text_I208_10451_96_5539}>80%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10451_173_646}>
                <Text style={styles.Text_I208_10451_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10451_96_5542}>
                <Text style={styles.Text_I208_10451_96_5542}>
                  Inspection #1006
                </Text>
              </View>
              <View style={styles.View_I208_10451_96_5533}>
                <Text style={styles.Text_I208_10451_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10452}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10452_96_5536}
              />
              <View style={styles.View_I208_10452_173_3081}>
                <View style={styles.View_I208_10452_173_934}>
                  <Text style={styles.Text_I208_10452_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10452_96_5539}>
                  <Text style={styles.Text_I208_10452_96_5539}>72%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10452_173_646}>
                <Text style={styles.Text_I208_10452_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10452_96_5542}>
                <Text style={styles.Text_I208_10452_96_5542}>
                  Inspection #1005
                </Text>
              </View>
              <View style={styles.View_I208_10452_96_5533}>
                <Text style={styles.Text_I208_10452_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10453}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10453_96_5536}
              />
              <View style={styles.View_I208_10453_173_3081}>
                <View style={styles.View_I208_10453_173_934}>
                  <Text style={styles.Text_I208_10453_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10453_96_5539}>
                  <Text style={styles.Text_I208_10453_96_5539}>85%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10453_173_646}>
                <Text style={styles.Text_I208_10453_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10453_96_5542}>
                <Text style={styles.Text_I208_10453_96_5542}>
                  Inspection #1004
                </Text>
              </View>
              <View style={styles.View_I208_10453_96_5533}>
                <Text style={styles.Text_I208_10453_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10454}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10454_96_5536}
              />
              <View style={styles.View_I208_10454_173_3081}>
                <View style={styles.View_I208_10454_173_934}>
                  <Text style={styles.Text_I208_10454_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10454_96_5539}>
                  <Text style={styles.Text_I208_10454_96_5539}>98%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10454_173_646}>
                <Text style={styles.Text_I208_10454_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10454_96_5542}>
                <Text style={styles.Text_I208_10454_96_5542}>
                  Inspection #1003
                </Text>
              </View>
              <View style={styles.View_I208_10454_96_5533}>
                <Text style={styles.Text_I208_10454_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10455}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10455_96_5536}
              />
              <View style={styles.View_I208_10455_173_3081}>
                <View style={styles.View_I208_10455_173_934}>
                  <Text style={styles.Text_I208_10455_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10455_96_5539}>
                  <Text style={styles.Text_I208_10455_96_5539}>92%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10455_173_646}>
                <Text style={styles.Text_I208_10455_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10455_96_5542}>
                <Text style={styles.Text_I208_10455_96_5542}>
                  Inspection #1002
                </Text>
              </View>
              <View style={styles.View_I208_10455_96_5533}>
                <Text style={styles.Text_I208_10455_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ba/f2d0/84b1ae3fc83189c61ae583633d5aa9a0"
                }}
                style={styles.ImageBackground_I208_10456_96_5536}
              />
              <View style={styles.View_I208_10456_173_3081}>
                <View style={styles.View_I208_10456_173_934}>
                  <Text style={styles.Text_I208_10456_173_934}>GRADE</Text>
                </View>
                <View style={styles.View_I208_10456_96_5539}>
                  <Text style={styles.Text_I208_10456_96_5539}>86%</Text>
                </View>
              </View>
              <View style={styles.View_I208_10456_173_646}>
                <Text style={styles.Text_I208_10456_173_646}>
                  by Jason Smith
                </Text>
              </View>
              <View style={styles.View_I208_10456_96_5542}>
                <Text style={styles.Text_I208_10456_96_5542}>
                  Inspection #1001
                </Text>
              </View>
              <View style={styles.View_I208_10456_96_5533}>
                <Text style={styles.Text_I208_10456_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_208_10457}>
            <View style={styles.View_I208_10457_153_138} />
          </View>
          <View style={styles.View_208_10458}>
            <View style={styles.View_208_10459}>
              <Text style={styles.Text_208_10459}>
                Inspection Result - #1007
              </Text>
            </View>
            <View style={styles.View_208_10460}>
              <View style={styles.View_I208_10460_181_85}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ffb/c25c/a76ead0626ebaf746ebdfffc675f51a4"
                  }}
                  style={styles.ImageBackground_I208_10460_181_85_96_5536}
                />
                <View style={styles.View_I208_10460_181_85_173_3081}>
                  <View style={styles.View_I208_10460_181_85_173_934}>
                    <Text style={styles.Text_I208_10460_181_85_173_934}>
                      Total Points
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_181_85_96_5539}>
                    <Text style={styles.Text_I208_10460_181_85_96_5539}>
                      05/06
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I208_10460_181_85_173_646}>
                  <Text style={styles.Text_I208_10460_181_85_173_646}>
                    cleaned by Tyler Harris
                  </Text>
                </View>
                <View style={styles.View_I208_10460_181_85_96_5542}>
                  <Text style={styles.Text_I208_10460_181_85_96_5542}>
                    Classroom 102
                  </Text>
                </View>
                <View style={styles.View_I208_10460_181_85_96_5533}>
                  <Text style={styles.Text_I208_10460_181_85_96_5533}>
                    Mon, 12/01/21 3:40 PM
                  </Text>
                </View>
              </View>
              <View style={styles.View_I208_10460_206_269}>
                <View style={styles.View_I208_10460_206_265}>
                  <View style={styles.View_I208_10460_206_265_181_89}>
                    <Text style={styles.Text_I208_10460_206_265_181_89}>
                      PARAMETER
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_265_181_99}>
                    <Text style={styles.Text_I208_10460_206_265_181_99}>
                      RESULT
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_265_181_108}>
                    <Text style={styles.Text_I208_10460_206_265_181_108}>
                      POINTS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_265_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_265_208_10163_0_230}
                    />
                  </View>
                </View>
                <View style={styles.View_I208_10460_208_9944}>
                  <View style={styles.View_I208_10460_208_9944_181_89}>
                    <Text style={styles.Text_I208_10460_208_9944_181_89}>
                      1. Floors swept and mopped
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_208_9944_181_99}>
                    <Text style={styles.Text_I208_10460_208_9944_181_99}>
                      PASS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_208_9944_181_108}>
                    <Text style={styles.Text_I208_10460_208_9944_181_108}>
                      01
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_272}>
                  <View style={styles.View_I208_10460_206_272_181_89}>
                    <Text style={styles.Text_I208_10460_206_272_181_89}>
                      2. Desktops cleaned and disinfected
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_272_181_99}>
                    <Text style={styles.Text_I208_10460_206_272_181_99}>
                      PASS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_272_181_108}>
                    <Text style={styles.Text_I208_10460_206_272_181_108}>
                      01
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_272_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_272_208_10163_0_230}
                    />
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_276}>
                  <View style={styles.View_I208_10460_206_276_181_89}>
                    <Text style={styles.Text_I208_10460_206_276_181_89}>
                      3. High dusting completed
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_276_181_99}>
                    <Text style={styles.Text_I208_10460_206_276_181_99}>
                      FAIL
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_276_181_108}>
                    <Text style={styles.Text_I208_10460_206_276_181_108}>
                      00
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_276_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_276_208_10163_0_230}
                    />
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_292}>
                  <View style={styles.View_I208_10460_208_9936}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559b/ea77/96e3fc1a9143744432914693354559e0"
                      }}
                      style={styles.ImageBackground_I208_10460_208_9940}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b13/34f0/91e5639024033dfd96062591782639ca"
                      }}
                      style={styles.ImageBackground_I208_10460_208_9941}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/042f/357a/beaf1bb87f7bd2bb1970295b6e0c8c0d"
                      }}
                      style={styles.ImageBackground_I208_10460_208_9942}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559b/ea77/96e3fc1a9143744432914693354559e0"
                      }}
                      style={styles.ImageBackground_I208_10460_208_9943}
                    />
                  </View>
                  <View style={styles.View_I208_10460_181_92}>
                    <Text style={styles.Text_I208_10460_181_92}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vel et nulla ut amet porttitor dolor. Aenean vivamus
                      tristique tincidunt est in porttitor.
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_660}>
                    <Text style={styles.Text_I208_10460_206_660}>
                      Inspection notes &amp; images
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_280}>
                  <View style={styles.View_I208_10460_206_280_181_89}>
                    <Text style={styles.Text_I208_10460_206_280_181_89}>
                      4. Trash emptied
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_280_181_99}>
                    <Text style={styles.Text_I208_10460_206_280_181_99}>
                      PASS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_280_181_108}>
                    <Text style={styles.Text_I208_10460_206_280_181_108}>
                      01
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_280_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_280_208_10163_0_230}
                    />
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_284}>
                  <View style={styles.View_I208_10460_206_284_181_89}>
                    <Text style={styles.Text_I208_10460_206_284_181_89}>
                      5. Glass cleaned
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_284_181_99}>
                    <Text style={styles.Text_I208_10460_206_284_181_99}>
                      PASS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_284_181_108}>
                    <Text style={styles.Text_I208_10460_206_284_181_108}>
                      01
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_284_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_284_208_10163_0_230}
                    />
                  </View>
                </View>
                <View style={styles.View_I208_10460_206_288}>
                  <View style={styles.View_I208_10460_206_288_181_89}>
                    <Text style={styles.Text_I208_10460_206_288_181_89}>
                      6. Touch points disinfected
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_288_181_99}>
                    <Text style={styles.Text_I208_10460_206_288_181_99}>
                      PASS
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_288_181_108}>
                    <Text style={styles.Text_I208_10460_206_288_181_108}>
                      01
                    </Text>
                  </View>
                  <View style={styles.View_I208_10460_206_288_208_10163}>
                    <View
                      style={styles.View_I208_10460_206_288_208_10163_0_230}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_208_10461}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/639b/c1e4/88883f37c89ca1af9acb696e2901382e"
                }}
                style={styles.ImageBackground_I208_10461_96_5536}
              />
              <View style={styles.View_I208_10461_173_3081}>
                <View style={styles.View_I208_10461_173_934}>
                  <Text style={styles.Text_I208_10461_173_934}>
                    Total Points
                  </Text>
                </View>
                <View style={styles.View_I208_10461_96_5539}>
                  <Text style={styles.Text_I208_10461_96_5539}>04/06</Text>
                </View>
              </View>
              <View style={styles.View_I208_10461_173_646}>
                <Text style={styles.Text_I208_10461_173_646}>
                  cleaned by George Tucker
                </Text>
              </View>
              <View style={styles.View_I208_10461_96_5542}>
                <Text style={styles.Text_I208_10461_96_5542}>
                  Classroom 104
                </Text>
              </View>
              <View style={styles.View_I208_10461_96_5533}>
                <Text style={styles.Text_I208_10461_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10462}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/639b/c1e4/88883f37c89ca1af9acb696e2901382e"
                }}
                style={styles.ImageBackground_I208_10462_96_5536}
              />
              <View style={styles.View_I208_10462_173_3081}>
                <View style={styles.View_I208_10462_173_934}>
                  <Text style={styles.Text_I208_10462_173_934}>
                    Total Points
                  </Text>
                </View>
                <View style={styles.View_I208_10462_96_5539}>
                  <Text style={styles.Text_I208_10462_96_5539}>05/06</Text>
                </View>
              </View>
              <View style={styles.View_I208_10462_173_646}>
                <Text style={styles.Text_I208_10462_173_646}>
                  cleaned by Ryan Wade
                </Text>
              </View>
              <View style={styles.View_I208_10462_96_5542}>
                <Text style={styles.Text_I208_10462_96_5542}>Restroom 2</Text>
              </View>
              <View style={styles.View_I208_10462_96_5533}>
                <Text style={styles.Text_I208_10462_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10463}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/639b/c1e4/88883f37c89ca1af9acb696e2901382e"
                }}
                style={styles.ImageBackground_I208_10463_96_5536}
              />
              <View style={styles.View_I208_10463_173_3081}>
                <View style={styles.View_I208_10463_173_934}>
                  <Text style={styles.Text_I208_10463_173_934}>
                    Total Points
                  </Text>
                </View>
                <View style={styles.View_I208_10463_96_5539}>
                  <Text style={styles.Text_I208_10463_96_5539}>06/06</Text>
                </View>
              </View>
              <View style={styles.View_I208_10463_173_646}>
                <Text style={styles.Text_I208_10463_173_646}>
                  cleaned by George Tucker
                </Text>
              </View>
              <View style={styles.View_I208_10463_96_5542}>
                <Text style={styles.Text_I208_10463_96_5542}>Hallway 2</Text>
              </View>
              <View style={styles.View_I208_10463_96_5533}>
                <Text style={styles.Text_I208_10463_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
            <View style={styles.View_208_10464}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/639b/c1e4/88883f37c89ca1af9acb696e2901382e"
                }}
                style={styles.ImageBackground_I208_10464_96_5536}
              />
              <View style={styles.View_I208_10464_173_3081}>
                <View style={styles.View_I208_10464_173_934}>
                  <Text style={styles.Text_I208_10464_173_934}>
                    Total Points
                  </Text>
                </View>
                <View style={styles.View_I208_10464_96_5539}>
                  <Text style={styles.Text_I208_10464_96_5539}>04/06</Text>
                </View>
              </View>
              <View style={styles.View_I208_10464_173_646}>
                <Text style={styles.Text_I208_10464_173_646}>
                  cleaned by Travis Head
                </Text>
              </View>
              <View style={styles.View_I208_10464_96_5542}>
                <Text style={styles.Text_I208_10464_96_5542}>Gym</Text>
              </View>
              <View style={styles.View_I208_10464_96_5533}>
                <Text style={styles.Text_I208_10464_96_5533}>
                  Mon, 12/01/21 3:40 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_208_10465}>
          <View style={styles.View_I208_10465_196_1177}>
            <View style={styles.View_I208_10465_196_1177_153_6159}>
              <View style={styles.View_I208_10465_196_1177_0_890}>
                <Text style={styles.Text_I208_10465_196_1177_0_890}>
                  overview
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_196_1177_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6134}>
            <View style={styles.View_I208_10465_153_6134_153_6159}>
              <View style={styles.View_I208_10465_153_6134_0_890}>
                <Text style={styles.Text_I208_10465_153_6134_0_890}>
                  reports
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6134_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6135}>
            <View style={styles.View_I208_10465_153_6135_153_6263}>
              <View style={styles.View_I208_10465_153_6135_0_897}>
                <Text style={styles.Text_I208_10465_153_6135_0_897}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6135_0_896}>
              <View style={styles.View_I208_10465_153_6135_0_896_0_342} />
            </View>
          </View>
          <View style={styles.View_I208_10465_153_6136}>
            <View style={styles.View_I208_10465_153_6136_153_6159}>
              <View style={styles.View_I208_10465_153_6136_0_890}>
                <Text style={styles.Text_I208_10465_153_6136_0_890}>
                  People
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6136_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6144}>
            <View style={styles.View_I208_10465_153_6144_153_6159}>
              <View style={styles.View_I208_10465_153_6144_0_890}>
                <Text style={styles.Text_I208_10465_153_6144_0_890}>
                  Budgeting
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6144_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6147}>
            <View style={styles.View_I208_10465_153_6147_153_6159}>
              <View style={styles.View_I208_10465_153_6147_0_890}>
                <Text style={styles.Text_I208_10465_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6147_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6150}>
            <View style={styles.View_I208_10465_153_6150_153_6159}>
              <View style={styles.View_I208_10465_153_6150_0_890}>
                <Text style={styles.Text_I208_10465_153_6150_0_890}>
                  savings
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6150_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6153}>
            <View style={styles.View_I208_10465_153_6153_153_6159}>
              <View style={styles.View_I208_10465_153_6153_0_890}>
                <Text style={styles.Text_I208_10465_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6153_0_892} />
          </View>
          <View style={styles.View_I208_10465_153_6156}>
            <View style={styles.View_I208_10465_153_6156_153_6159}>
              <View style={styles.View_I208_10465_153_6156_0_890}>
                <Text style={styles.Text_I208_10465_153_6156_0_890}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I208_10465_153_6156_0_892} />
          </View>
        </View>
        <View style={styles.View_208_10466}>
          <View style={styles.View_I208_10466_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
              }}
              style={styles.ImageBackground_I208_10466_153_6113}
            />
            <View style={styles.View_I208_10466_153_6114} />
          </View>
          <View style={styles.View_I208_10466_153_6116}>
            <View style={styles.View_I208_10466_153_6117}>
              <Text style={styles.Text_I208_10466_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I208_10466_153_6118}
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
  View_208_10439: {
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
  View_208_10440: {
    flexGrow: 1,
    width: wp("29.166666666666668%"),
    height: 844,
    minHeight: 844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 180,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_208_10441: {
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
  View_I208_10441_153_5917: {
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
  View_I208_10441_153_5898: {
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
  ImageBackground_I208_10441_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I208_10441_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10441_153_5902: {
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
  View_I208_10441_153_5903: {
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
  View_I208_10441_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10441_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I208_10441_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I208_10441_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I208_10441_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10441_153_5907: {
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
  View_I208_10441_153_5908: {
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
  ImageBackground_I208_10441_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I208_10441_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I208_10441_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10441_153_5909: {
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
  View_I208_10441_153_5909_0_230: {
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
  View_208_10442: {
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
  View_I208_10442_153_5917: {
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
  View_I208_10442_153_5898: {
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
  ImageBackground_I208_10442_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I208_10442_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10442_153_5902: {
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
  View_I208_10442_153_5903: {
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
  View_I208_10442_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10442_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I208_10442_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I208_10442_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I208_10442_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10442_153_5907: {
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
  View_I208_10442_153_5908: {
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
  ImageBackground_I208_10442_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I208_10442_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I208_10442_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10442_153_5909: {
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
  View_I208_10442_153_5909_0_230: {
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
  View_208_10443: {
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
  View_I208_10443_153_5917: {
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
  View_I208_10443_153_5898: {
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
  ImageBackground_I208_10443_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I208_10443_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10443_153_5902: {
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
  View_I208_10443_153_5903: {
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
  View_I208_10443_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10443_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I208_10443_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I208_10443_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I208_10443_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10443_153_5907: {
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
  View_I208_10443_153_5908: {
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
  ImageBackground_I208_10443_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I208_10443_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I208_10443_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10443_153_5909: {
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
  View_I208_10443_153_5909_0_230: {
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
  View_208_10444: {
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
  View_I208_10444_153_5917: {
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
  View_I208_10444_153_5898: {
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
  ImageBackground_I208_10444_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I208_10444_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10444_153_5902: {
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
  View_I208_10444_153_5903: {
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
  View_I208_10444_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10444_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I208_10444_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I208_10444_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I208_10444_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10444_153_5907: {
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
  View_I208_10444_153_5908: {
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
  ImageBackground_I208_10444_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I208_10444_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I208_10444_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10444_153_5909: {
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
  View_I208_10444_153_5909_0_230: {
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
  View_208_10445: {
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
  View_I208_10445_153_130: {
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
  View_I208_10445_153_130_0_230: {
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
  View_I208_10445_189_362: {
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
  ImageBackground_I208_10445_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I208_10445_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I208_10445_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10445_186_25: {
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
  View_I208_10445_189_292: {
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
  ImageBackground_I208_10445_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10445_153_136: {
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
  View_I208_10445_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10445_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10445_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I208_10445_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I208_10445_139_759: {
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
  View_I208_10445_139_761: {
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
  View_I208_10445_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I208_10445_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I208_10445_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I208_10445_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I208_10445_229_3960: {
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
  ImageBackground_I208_10445_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10445_229_1982: {
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
  View_I208_10445_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I208_10445_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I208_10445_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I208_10445_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I208_10445_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_208_10446: {
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
  View_I208_10446_153_138: {
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
  View_208_10447: {
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
  View_208_10448: {
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
  View_208_10449: {
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
  View_208_10450: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16,
    backgroundColor: "rgba(180, 219, 219, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10450_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10450_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10450_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10450_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10450_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10450_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10450_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10450_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10450_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10450_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10450_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10450_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10451: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 140,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10451_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10451_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10451_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10451_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10451_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10451_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10451_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10451_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10451_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10451_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10451_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10451_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10452: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 264,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10452_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10452_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10452_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10452_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10452_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10452_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10452_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10452_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10452_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10452_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10452_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10452_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10453: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 388,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10453_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10453_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10453_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10453_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10453_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10453_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10453_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10453_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10453_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10453_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10453_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10453_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10454: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 512,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10454_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10454_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10454_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10454_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10454_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10454_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10454_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10454_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10454_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10454_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10454_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10454_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10455: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 636,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10455_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10455_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10455_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10455_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10455_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10455_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10455_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10455_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10455_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10455_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10455_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10455_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10456: {
    width: wp("25.972222222222225%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 760,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10456_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.638888888888893%"),
    top: 24
  },
  View_I208_10456_173_3081: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10456_173_934: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10456_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10456_96_5539: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10456_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10456_173_646: {
    flexGrow: 1,
    width: wp("7.847222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 68
  },
  Text_I208_10456_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10456_96_5542: {
    flexGrow: 1,
    width: wp("11.041666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 36
  },
  Text_I208_10456_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10456_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I208_10456_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10457: {
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
  View_I208_10457_153_138: {
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
  View_208_10458: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888888%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_208_10459: {
    width: wp("16.25%"),
    minWidth: wp("16.25%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 24
  },
  Text_208_10459: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_208_10460: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: 688,
    minHeight: 688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 64,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I208_10460_181_85: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I208_10460_181_85_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: 24
  },
  View_I208_10460_181_85_173_3081: {
    flexGrow: 1,
    width: wp("6.736111111111111%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54166666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_181_85_173_934: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10460_181_85_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10460_181_85_96_5539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10460_181_85_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10460_181_85_173_646: {
    flexGrow: 1,
    width: wp("11.597222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68
  },
  Text_I208_10460_181_85_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_181_85_96_5542: {
    flexGrow: 1,
    width: wp("9.583333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 36
  },
  Text_I208_10460_181_85_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_181_85_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I208_10460_181_85_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_I208_10460_206_269: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 580,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 108,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_265: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_265_181_89: {
    flexGrow: 1,
    width: wp("5.694444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_265_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I208_10460_206_265_181_99: {
    flexGrow: 1,
    width: wp("3.4722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.888888888888886%"),
    top: 12
  },
  Text_I208_10460_206_265_181_99: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I208_10460_206_265_181_108: {
    flexGrow: 1,
    width: wp("3.4722222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.805555555555557%"),
    top: 12
  },
  Text_I208_10460_206_265_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I208_10460_206_265_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_265_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I208_10460_208_9944: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_208_9944_181_89: {
    flexGrow: 1,
    width: wp("14.51388888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_208_9944_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_208_9944_181_99: {
    flexGrow: 1,
    width: wp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.236111111111114%"),
    top: 12
  },
  Text_I208_10460_208_9944_181_99: {
    color: "rgba(46, 210, 92, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_208_9944_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_208_9944_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_272: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 96,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_272_181_89: {
    flexGrow: 1,
    width: wp("18.47222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_272_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_272_181_99: {
    flexGrow: 1,
    width: wp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.236111111111114%"),
    top: 12
  },
  Text_I208_10460_206_272_181_99: {
    color: "rgba(46, 210, 92, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_272_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_206_272_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_272_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_272_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I208_10460_206_276: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 144,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_276_181_89: {
    flexGrow: 1,
    width: wp("13.402777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_276_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_276_181_99: {
    flexGrow: 1,
    width: wp("2.2222222222222223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.513888888888886%"),
    top: 12
  },
  Text_I208_10460_206_276_181_99: {
    color: "rgba(249, 34, 21, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_276_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_206_276_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_276_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_276_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I208_10460_206_292: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: 228,
    minHeight: 228,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 192,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_208_9936: {
    flexGrow: 1,
    width: wp("33.88888888888889%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 88,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I208_10460_208_9940: {
    width: wp("11.11111111111111%"),
    height: 120,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I208_10460_208_9941: {
    width: wp("11.11111111111111%"),
    height: 120,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666657%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I208_10460_208_9942: {
    width: wp("11.11111111111111%"),
    height: 120,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.33333333333333%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I208_10460_208_9943: {
    width: wp("11.11111111111111%"),
    height: 120,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I208_10460_181_92: {
    flexGrow: 1,
    width: wp("33.88888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 36
  },
  Text_I208_10460_181_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_660: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 8
  },
  Text_I208_10460_206_660: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I208_10460_206_280: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 420,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_280_181_89: {
    flexGrow: 1,
    width: wp("8.541666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_280_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_280_181_99: {
    flexGrow: 1,
    width: wp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.236111111111114%"),
    top: 12
  },
  Text_I208_10460_206_280_181_99: {
    color: "rgba(46, 210, 92, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_280_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_206_280_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_280_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_280_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I208_10460_206_284: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 468,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_284_181_89: {
    flexGrow: 1,
    width: wp("8.402777777777779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_284_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_284_181_99: {
    flexGrow: 1,
    width: wp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.236111111111114%"),
    top: 12
  },
  Text_I208_10460_206_284_181_99: {
    color: "rgba(46, 210, 92, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_284_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_206_284_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_284_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_284_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I208_10460_206_288: {
    width: wp("40.27777777777778%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 516,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I208_10460_206_288_181_89: {
    flexGrow: 1,
    width: wp("13.819444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 12
  },
  Text_I208_10460_206_288_181_89: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10460_206_288_181_99: {
    flexGrow: 1,
    width: wp("2.7777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.236111111111114%"),
    top: 12
  },
  Text_I208_10460_206_288_181_99: {
    color: "rgba(46, 210, 92, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_288_181_108: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: 12
  },
  Text_I208_10460_206_288_181_108: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10460_206_288_208_10163: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10460_206_288_208_10163_0_230: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_208_10461: {
    width: wp("40.27777777777778%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 768,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10461_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: 24
  },
  View_I208_10461_173_3081: {
    flexGrow: 1,
    width: wp("6.736111111111111%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54166666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10461_173_934: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10461_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10461_96_5539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10461_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10461_173_646: {
    flexGrow: 1,
    width: wp("13.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68
  },
  Text_I208_10461_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10461_96_5542: {
    flexGrow: 1,
    width: wp("9.583333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 36
  },
  Text_I208_10461_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10461_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I208_10461_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10462: {
    width: wp("40.27777777777778%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 892,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10462_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: 24
  },
  View_I208_10462_173_3081: {
    flexGrow: 1,
    width: wp("6.736111111111111%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54166666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10462_173_934: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10462_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10462_96_5539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10462_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10462_173_646: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68
  },
  Text_I208_10462_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10462_96_5542: {
    flexGrow: 1,
    width: wp("7.291666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 36
  },
  Text_I208_10462_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10462_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I208_10462_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10463: {
    width: wp("40.27777777777778%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 1016,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10463_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: 24
  },
  View_I208_10463_173_3081: {
    flexGrow: 1,
    width: wp("6.736111111111111%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54166666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10463_173_934: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10463_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10463_96_5539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10463_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10463_173_646: {
    flexGrow: 1,
    width: wp("13.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68
  },
  Text_I208_10463_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10463_96_5542: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 36
  },
  Text_I208_10463_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10463_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I208_10463_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10464: {
    width: wp("40.27777777777778%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 1140,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I208_10464_96_5536: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: 24
  },
  View_I208_10464_173_3081: {
    flexGrow: 1,
    width: wp("6.736111111111111%"),
    height: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54166666666667%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10464_173_934: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10464_173_934: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I208_10464_96_5539: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16
  },
  Text_I208_10464_96_5539: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I208_10464_173_646: {
    flexGrow: 1,
    width: wp("11.805555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68
  },
  Text_I208_10464_173_646: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I208_10464_96_5542: {
    flexGrow: 1,
    width: wp("2.9166666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 36
  },
  Text_I208_10464_96_5542: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I208_10464_96_5533: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I208_10464_96_5533: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_208_10465: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 180,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I208_10465_196_1177: {
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
  View_I208_10465_196_1177_153_6159: {
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
  View_I208_10465_196_1177_0_890: {
    flexGrow: 1,
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I208_10465_196_1177_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_196_1177_0_892: {
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
  View_I208_10465_153_6134: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888886%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10465_153_6134_153_6159: {
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
  View_I208_10465_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I208_10465_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6134_0_892: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I208_10465_153_6135: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777771%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I208_10465_153_6135_153_6263: {
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
  View_I208_10465_153_6135_0_897: {
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I208_10465_153_6135_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6135_0_896: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I208_10465_153_6135_0_896_0_342: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
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
  View_I208_10465_153_6136: {
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
  View_I208_10465_153_6136_153_6159: {
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
  View_I208_10465_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I208_10465_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6136_0_892: {
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
  View_I208_10465_153_6144: {
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
  View_I208_10465_153_6144_153_6159: {
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
  View_I208_10465_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I208_10465_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6144_0_892: {
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
  View_I208_10465_153_6147: {
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
  View_I208_10465_153_6147_153_6159: {
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
  View_I208_10465_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I208_10465_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6147_0_892: {
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
  View_I208_10465_153_6150: {
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
  View_I208_10465_153_6150_153_6159: {
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
  View_I208_10465_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I208_10465_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6150_0_892: {
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
  View_I208_10465_153_6153: {
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
  View_I208_10465_153_6153_153_6159: {
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
  View_I208_10465_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I208_10465_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6153_0_892: {
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
  View_I208_10465_153_6156: {
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
  View_I208_10465_153_6156_153_6159: {
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
  View_I208_10465_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I208_10465_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I208_10465_153_6156_0_892: {
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
  View_208_10466: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 180,
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10466_153_6108: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I208_10466_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I208_10466_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I208_10466_153_6116: {
    flexGrow: 1,
    width: wp("68.54166666666667%"),
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_10466_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I208_10466_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I208_10466_153_6118: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.875%")
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
