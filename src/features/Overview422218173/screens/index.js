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
      <View style={styles.View_231_95}>
        <View style={styles.View_231_96}>
          <View style={styles.View_231_97}>
            <View style={styles.View_I231_97_153_5917}>
              <View style={styles.View_I231_97_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I231_97_153_5900}
                />
                <View style={styles.View_I231_97_153_5941} />
              </View>
              <View style={styles.View_I231_97_153_5902}>
                <View style={styles.View_I231_97_153_5903}>
                  <View style={styles.View_I231_97_153_5904}>
                    <Text style={styles.Text_I231_97_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_97_153_5905}
                  />
                </View>
                <View style={styles.View_I231_97_153_5906}>
                  <Text style={styles.Text_I231_97_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_97_153_5907}>
              <View style={styles.View_I231_97_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_97_153_5908_138_29}
                />
                <View style={styles.View_I231_97_153_5908_0_2104}>
                  <Text style={styles.Text_I231_97_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_97_153_5909}>
                <View style={styles.View_I231_97_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_98}>
            <View style={styles.View_I231_98_153_5917}>
              <View style={styles.View_I231_98_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I231_98_153_6015}
                />
                <View style={styles.View_I231_98_153_5941} />
              </View>
              <View style={styles.View_I231_98_153_5902}>
                <View style={styles.View_I231_98_153_5903}>
                  <View style={styles.View_I231_98_153_5904}>
                    <Text style={styles.Text_I231_98_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_98_153_5905}
                  />
                </View>
                <View style={styles.View_I231_98_153_5906}>
                  <Text style={styles.Text_I231_98_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_98_153_5907}>
              <View style={styles.View_I231_98_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_98_153_5908_138_29}
                />
                <View style={styles.View_I231_98_153_5908_0_2104}>
                  <Text style={styles.Text_I231_98_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_98_153_5909}>
                <View style={styles.View_I231_98_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_99}>
            <View style={styles.View_I231_99_153_5917}>
              <View style={styles.View_I231_99_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I231_99_153_6014}
                />
                <View style={styles.View_I231_99_153_5941} />
              </View>
              <View style={styles.View_I231_99_153_5902}>
                <View style={styles.View_I231_99_153_5903}>
                  <View style={styles.View_I231_99_153_5904}>
                    <Text style={styles.Text_I231_99_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_99_153_5905}
                  />
                </View>
                <View style={styles.View_I231_99_153_5906}>
                  <Text style={styles.Text_I231_99_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_99_153_5907}>
              <View style={styles.View_I231_99_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_99_153_5908_138_29}
                />
                <View style={styles.View_I231_99_153_5908_0_2104}>
                  <Text style={styles.Text_I231_99_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_99_153_5909}>
                <View style={styles.View_I231_99_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_100}>
            <View style={styles.View_I231_100_153_5917}>
              <View style={styles.View_I231_100_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I231_100_153_5899}
                />
                <View style={styles.View_I231_100_153_5941} />
              </View>
              <View style={styles.View_I231_100_153_5902}>
                <View style={styles.View_I231_100_153_5903}>
                  <View style={styles.View_I231_100_153_5904}>
                    <Text style={styles.Text_I231_100_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_100_153_5905}
                  />
                </View>
                <View style={styles.View_I231_100_153_5906}>
                  <Text style={styles.Text_I231_100_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_100_153_5907}>
              <View style={styles.View_I231_100_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_100_153_5908_138_29}
                />
                <View style={styles.View_I231_100_153_5908_0_2104}>
                  <Text style={styles.Text_I231_100_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_100_153_5909}>
                <View style={styles.View_I231_100_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_231_101}>
          <View style={styles.View_I231_101_153_130}>
            <View style={styles.View_I231_101_153_130_0_230} />
          </View>
          <View style={styles.View_I231_101_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I231_101_189_362_138_29}
            />
            <View style={styles.View_I231_101_189_362_0_2104}>
              <Text style={styles.Text_I231_101_189_362_0_2104}>Building</Text>
            </View>
          </View>
          <View style={styles.View_I231_101_186_25}>
            <View style={styles.View_I231_101_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                }}
                style={styles.ImageBackground_I231_101_153_132}
              />
            </View>
            <View style={styles.View_I231_101_153_136}>
              <View style={styles.View_I231_101_153_14}>
                <Text style={styles.Text_I231_101_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I231_101_153_1}>
                <Text style={styles.Text_I231_101_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I231_101_139_759}>
            <View style={styles.View_I231_101_139_761} />
            <View style={styles.View_I231_101_139_760}>
              <Text style={styles.Text_I231_101_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I231_101_189_305}>
              <Text style={styles.Text_I231_101_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I231_101_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I231_101_229_2631}
            />
            <View style={styles.View_I231_101_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I231_101_229_1982_229_1973}
              />
              <View style={styles.View_I231_101_229_1982_229_1975}>
                <View style={styles.View_I231_101_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I231_101_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I231_101_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_231_102}>
        <View style={styles.View_I231_102_153_138} />
      </View>
      <View style={styles.View_231_103}>
        <View style={styles.View_231_104}>
          <View style={styles.View_231_105}>
            <View style={styles.View_231_106}>
              <View style={styles.View_231_107}>
                <Text style={styles.Text_231_107}>Sections</Text>
              </View>
              <View style={styles.View_231_108}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                  }}
                  style={styles.ImageBackground_I231_108_138_29}
                />
                <View style={styles.View_I231_108_0_2104}>
                  <Text style={styles.Text_I231_108_0_2104}>section</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_231_109}>
              <View style={styles.View_I231_109_229_16266}>
                <View style={styles.View_I231_109_229_16266_229_13447}>
                  <View style={styles.View_I231_109_229_16266_15_8179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={
                        styles.ImageBackground_I231_109_229_16266_15_8179_138_29
                      }
                    />
                    <View style={styles.View_I231_109_229_16266_15_8179_0_2104}>
                      <Text
                        style={styles.Text_I231_109_229_16266_15_8179_0_2104}
                      >
                        Room
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_109_229_16266_237_1712}>
                    <View style={styles.View_I231_109_229_16266_15_8168}>
                      <Text style={styles.Text_I231_109_229_16266_15_8168}>
                        12 rooms
                      </Text>
                    </View>
                    <View style={styles.View_I231_109_229_16266_15_8170}>
                      <Text style={styles.Text_I231_109_229_16266_15_8170}>
                        04 people{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_109_229_16266_15_8164}>
                    <Text style={styles.Text_I231_109_229_16266_15_8164}>
                      Section 1
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c8/b45e/503c0e07df36c111dd6ac1156db78329"
                    }}
                    style={styles.ImageBackground_I231_109_229_16266_15_8251}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_231_110}>
              <View style={styles.View_I231_110_229_16266}>
                <View style={styles.View_I231_110_229_16266_229_13447}>
                  <View style={styles.View_I231_110_229_16266_15_8179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={
                        styles.ImageBackground_I231_110_229_16266_15_8179_138_29
                      }
                    />
                    <View style={styles.View_I231_110_229_16266_15_8179_0_2104}>
                      <Text
                        style={styles.Text_I231_110_229_16266_15_8179_0_2104}
                      >
                        Room
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_110_229_16266_237_1712}>
                    <View style={styles.View_I231_110_229_16266_15_8168}>
                      <Text style={styles.Text_I231_110_229_16266_15_8168}>
                        12 rooms
                      </Text>
                    </View>
                    <View style={styles.View_I231_110_229_16266_15_8170}>
                      <Text style={styles.Text_I231_110_229_16266_15_8170}>
                        04 people{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_110_229_16266_15_8164}>
                    <Text style={styles.Text_I231_110_229_16266_15_8164}>
                      Section 2
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c8/b45e/503c0e07df36c111dd6ac1156db78329"
                    }}
                    style={styles.ImageBackground_I231_110_229_16266_15_8251}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_231_111}>
              <View style={styles.View_I231_111_229_16266}>
                <View style={styles.View_I231_111_229_16266_229_13447}>
                  <View style={styles.View_I231_111_229_16266_15_8179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={
                        styles.ImageBackground_I231_111_229_16266_15_8179_138_29
                      }
                    />
                    <View style={styles.View_I231_111_229_16266_15_8179_0_2104}>
                      <Text
                        style={styles.Text_I231_111_229_16266_15_8179_0_2104}
                      >
                        Room
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_111_229_16266_237_1712}>
                    <View style={styles.View_I231_111_229_16266_15_8168}>
                      <Text style={styles.Text_I231_111_229_16266_15_8168}>
                        12 rooms
                      </Text>
                    </View>
                    <View style={styles.View_I231_111_229_16266_15_8170}>
                      <Text style={styles.Text_I231_111_229_16266_15_8170}>
                        04 people{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_111_229_16266_15_8164}>
                    <Text style={styles.Text_I231_111_229_16266_15_8164}>
                      Section 3
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c8/b45e/503c0e07df36c111dd6ac1156db78329"
                    }}
                    style={styles.ImageBackground_I231_111_229_16266_15_8251}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_231_112}>
              <View style={styles.View_I231_112_229_16266}>
                <View style={styles.View_I231_112_229_16266_229_13447}>
                  <View style={styles.View_I231_112_229_16266_15_8179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={
                        styles.ImageBackground_I231_112_229_16266_15_8179_138_29
                      }
                    />
                    <View style={styles.View_I231_112_229_16266_15_8179_0_2104}>
                      <Text
                        style={styles.Text_I231_112_229_16266_15_8179_0_2104}
                      >
                        Room
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_112_229_16266_237_1712}>
                    <View style={styles.View_I231_112_229_16266_15_8168}>
                      <Text style={styles.Text_I231_112_229_16266_15_8168}>
                        12 rooms
                      </Text>
                    </View>
                    <View style={styles.View_I231_112_229_16266_15_8170}>
                      <Text style={styles.Text_I231_112_229_16266_15_8170}>
                        04 people{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_112_229_16266_15_8164}>
                    <Text style={styles.Text_I231_112_229_16266_15_8164}>
                      Section 4
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c8/b45e/503c0e07df36c111dd6ac1156db78329"
                    }}
                    style={styles.ImageBackground_I231_112_229_16266_15_8251}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_231_113}>
              <View style={styles.View_I231_113_229_16266}>
                <View style={styles.View_I231_113_229_16266_229_13447}>
                  <View style={styles.View_I231_113_229_16266_15_8179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={
                        styles.ImageBackground_I231_113_229_16266_15_8179_138_29
                      }
                    />
                    <View style={styles.View_I231_113_229_16266_15_8179_0_2104}>
                      <Text
                        style={styles.Text_I231_113_229_16266_15_8179_0_2104}
                      >
                        Room
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_113_229_16266_237_1712}>
                    <View style={styles.View_I231_113_229_16266_15_8168}>
                      <Text style={styles.Text_I231_113_229_16266_15_8168}>
                        12 rooms
                      </Text>
                    </View>
                    <View style={styles.View_I231_113_229_16266_15_8170}>
                      <Text style={styles.Text_I231_113_229_16266_15_8170}>
                        04 people{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_113_229_16266_15_8164}>
                    <Text style={styles.Text_I231_113_229_16266_15_8164}>
                      Section 5
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c8/b45e/503c0e07df36c111dd6ac1156db78329"
                    }}
                    style={styles.ImageBackground_I231_113_229_16266_15_8251}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_231_114}>
            <View style={styles.View_I231_114_153_138} />
          </View>
          <View style={styles.View_231_115}>
            <View style={styles.View_231_116}>
              <View style={styles.View_231_118}>
                <Text style={styles.Text_231_118}>Section 1</Text>
              </View>
              <View style={styles.View_231_119}>
                <View style={styles.View_231_120}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e3e/6996/0c1fd8fbb6404e7f0b32d3fff73aa443"
                    }}
                    style={styles.ImageBackground_I231_120_138_29}
                  />
                </View>
                <View style={styles.View_231_121}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d83b/c54f/febea4b7e822f3bc6c247383b3167955"
                    }}
                    style={styles.ImageBackground_I231_121_138_29}
                  />
                </View>
                <View style={styles.View_231_122}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                    }}
                    style={styles.ImageBackground_I231_122_138_29}
                  />
                  <View style={styles.View_I231_122_0_2104}>
                    <Text style={styles.Text_I231_122_0_2104}>Room</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_231_123}>
              <View style={styles.View_I231_123_0_909}>
                <View style={styles.View_I231_123_0_909_153_6159}>
                  <View style={styles.View_I231_123_0_909_0_890}>
                    <Text style={styles.Text_I231_123_0_909_0_890}>
                      Details
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I231_123_0_909_0_892} />
              </View>
              <View style={styles.View_I231_123_0_906}>
                <View style={styles.View_I231_123_0_906_153_6159}>
                  <View style={styles.View_I231_123_0_906_0_890}>
                    <Text style={styles.Text_I231_123_0_906_0_890}>Rooms</Text>
                  </View>
                </View>
                <View style={styles.View_I231_123_0_906_0_892} />
              </View>
              <View style={styles.View_I231_123_0_905}>
                <View style={styles.View_I231_123_0_905_153_6263}>
                  <View style={styles.View_I231_123_0_905_0_897}>
                    <Text style={styles.Text_I231_123_0_905_0_897}>People</Text>
                  </View>
                </View>
                <View style={styles.View_I231_123_0_905_0_896}>
                  <View style={styles.View_I231_123_0_905_0_896_0_342} />
                </View>
              </View>
            </View>
            <View style={styles.View_231_124}>
              <View style={styles.View_231_585}>
                <View style={styles.View_I231_585_76_9833}>
                  <Text style={styles.Text_I231_585_76_9833}>Abe Doe</Text>
                </View>
              </View>
              <View style={styles.View_231_586}>
                <View style={styles.View_I231_586_76_9833}>
                  <Text style={styles.Text_I231_586_76_9833}>Bishan Gupta</Text>
                </View>
              </View>
              <View style={styles.View_231_587}>
                <View style={styles.View_I231_587_76_9833}>
                  <Text style={styles.Text_I231_587_76_9833}>
                    Bueran Hendricks
                  </Text>
                </View>
              </View>
              <View style={styles.View_231_588}>
                <View style={styles.View_I231_588_76_9833}>
                  <Text style={styles.Text_I231_588_76_9833}>Bunny Reagan</Text>
                </View>
              </View>
              <View style={styles.View_231_589}>
                <View style={styles.View_I231_589_76_9833}>
                  <Text style={styles.Text_I231_589_76_9833}>Chris Morris</Text>
                </View>
              </View>
              <View style={styles.View_231_590}>
                <View style={styles.View_I231_590_76_9833}>
                  <Text style={styles.Text_I231_590_76_9833}>Dom Bess</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_231_132}>
          <View style={styles.View_I231_132_196_1177}>
            <View style={styles.View_I231_132_196_1177_153_6263}>
              <View style={styles.View_I231_132_196_1177_0_897}>
                <Text style={styles.Text_I231_132_196_1177_0_897}>
                  overview
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_132_196_1177_0_896}>
              <View style={styles.View_I231_132_196_1177_0_896_0_342} />
            </View>
          </View>
          <View style={styles.View_I231_132_153_6134}>
            <View style={styles.View_I231_132_153_6134_153_6159}>
              <View style={styles.View_I231_132_153_6134_0_890}>
                <Text style={styles.Text_I231_132_153_6134_0_890}>reports</Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6134_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6135}>
            <View style={styles.View_I231_132_153_6135_153_6159}>
              <View style={styles.View_I231_132_153_6135_0_890}>
                <Text style={styles.Text_I231_132_153_6135_0_890}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6135_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6136}>
            <View style={styles.View_I231_132_153_6136_153_6159}>
              <View style={styles.View_I231_132_153_6136_0_890}>
                <Text style={styles.Text_I231_132_153_6136_0_890}>People</Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6136_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6144}>
            <View style={styles.View_I231_132_153_6144_153_6159}>
              <View style={styles.View_I231_132_153_6144_0_890}>
                <Text style={styles.Text_I231_132_153_6144_0_890}>
                  Budgeting
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6144_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6147}>
            <View style={styles.View_I231_132_153_6147_153_6159}>
              <View style={styles.View_I231_132_153_6147_0_890}>
                <Text style={styles.Text_I231_132_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6147_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6150}>
            <View style={styles.View_I231_132_153_6150_153_6159}>
              <View style={styles.View_I231_132_153_6150_0_890}>
                <Text style={styles.Text_I231_132_153_6150_0_890}>savings</Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6150_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6153}>
            <View style={styles.View_I231_132_153_6153_153_6159}>
              <View style={styles.View_I231_132_153_6153_0_890}>
                <Text style={styles.Text_I231_132_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6153_0_892} />
          </View>
          <View style={styles.View_I231_132_153_6156}>
            <View style={styles.View_I231_132_153_6156_153_6159}>
              <View style={styles.View_I231_132_153_6156_0_890}>
                <Text style={styles.Text_I231_132_153_6156_0_890}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I231_132_153_6156_0_892} />
          </View>
        </View>
        <View style={styles.View_231_133}>
          <View style={styles.View_I231_133_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
              }}
              style={styles.ImageBackground_I231_133_153_6113}
            />
            <View style={styles.View_I231_133_153_6114} />
          </View>
          <View style={styles.View_I231_133_153_6116}>
            <View style={styles.View_I231_133_153_6117}>
              <Text style={styles.Text_I231_133_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I231_133_153_6118}
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
  View_231_95: {
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
  View_231_96: {
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
  View_231_97: {
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
  View_I231_97_153_5917: {
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
  View_I231_97_153_5898: {
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
  ImageBackground_I231_97_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_97_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_97_153_5902: {
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
  View_I231_97_153_5903: {
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
  View_I231_97_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_97_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_97_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_97_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_97_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_97_153_5907: {
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
  View_I231_97_153_5908: {
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
  ImageBackground_I231_97_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_97_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_97_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_97_153_5909: {
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
  View_I231_97_153_5909_0_230: {
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
  View_231_98: {
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
  View_I231_98_153_5917: {
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
  View_I231_98_153_5898: {
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
  ImageBackground_I231_98_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_98_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_98_153_5902: {
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
  View_I231_98_153_5903: {
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
  View_I231_98_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_98_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_98_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_98_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_98_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_98_153_5907: {
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
  View_I231_98_153_5908: {
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
  ImageBackground_I231_98_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_98_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_98_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_98_153_5909: {
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
  View_I231_98_153_5909_0_230: {
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
  View_231_99: {
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
  View_I231_99_153_5917: {
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
  View_I231_99_153_5898: {
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
  ImageBackground_I231_99_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_99_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_99_153_5902: {
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
  View_I231_99_153_5903: {
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
  View_I231_99_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_99_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_99_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_99_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_99_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_99_153_5907: {
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
  View_I231_99_153_5908: {
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
  ImageBackground_I231_99_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_99_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_99_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_99_153_5909: {
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
  View_I231_99_153_5909_0_230: {
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
  View_231_100: {
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
  View_I231_100_153_5917: {
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
  View_I231_100_153_5898: {
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
  ImageBackground_I231_100_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_100_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_100_153_5902: {
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
  View_I231_100_153_5903: {
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
  View_I231_100_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_100_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_100_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_100_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_100_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_100_153_5907: {
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
  View_I231_100_153_5908: {
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
  ImageBackground_I231_100_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_100_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_100_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_100_153_5909: {
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
  View_I231_100_153_5909_0_230: {
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
  View_231_101: {
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
  View_I231_101_153_130: {
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
  View_I231_101_153_130_0_230: {
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
  View_I231_101_189_362: {
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
  ImageBackground_I231_101_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_101_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_101_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_101_186_25: {
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
  View_I231_101_189_292: {
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
  ImageBackground_I231_101_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_101_153_136: {
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
  View_I231_101_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_101_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I231_101_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I231_101_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I231_101_139_759: {
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
  View_I231_101_139_761: {
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
  View_I231_101_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I231_101_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I231_101_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I231_101_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I231_101_229_3960: {
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
  ImageBackground_I231_101_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_101_229_1982: {
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
  View_I231_101_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I231_101_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I231_101_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I231_101_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I231_101_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_231_102: {
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
  View_I231_102_153_138: {
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
  View_231_103: {
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
  View_231_104: {
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
  View_231_105: {
    flexGrow: 1,
    width: wp("28.194444444444443%"),
    height: 796,
    minHeight: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_231_106: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_231_107: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6
  },
  Text_231_107: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_231_108: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.56944444444445%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_108_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_I231_108_0_2104: {
    flexGrow: 1,
    width: wp("4.513888888888888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 10
  },
  Text_I231_108_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_231_109: {
    width: wp("25.972222222222225%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_109_229_16266: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(180, 219, 219, 1)"
  },
  View_I231_109_229_16266_229_13447: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_109_229_16266_15_8179: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_109_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_109_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_109_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_109_229_16266_237_1712: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_109_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_109_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_109_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I231_109_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_109_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I231_109_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_109_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_231_110: {
    width: wp("25.972222222222225%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 204,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_110_229_16266: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_I231_110_229_16266_229_13447: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_110_229_16266_15_8179: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_110_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_110_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_110_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_110_229_16266_237_1712: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_110_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_110_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_110_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I231_110_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_110_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I231_110_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_110_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_231_111: {
    width: wp("25.972222222222225%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 340,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_111_229_16266: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_I231_111_229_16266_229_13447: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_111_229_16266_15_8179: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_111_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_111_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_111_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_111_229_16266_237_1712: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_111_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_111_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_111_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I231_111_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_111_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I231_111_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_111_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_231_112: {
    width: wp("25.972222222222225%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 476,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_112_229_16266: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_I231_112_229_16266_229_13447: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_112_229_16266_15_8179: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_112_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_112_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_112_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_112_229_16266_237_1712: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_112_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_112_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_112_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I231_112_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_112_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I231_112_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_112_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_231_113: {
    width: wp("25.972222222222225%"),
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 612,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_113_229_16266: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 246, 246, 1)"
  },
  View_I231_113_229_16266_229_13447: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_113_229_16266_15_8179: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_113_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_113_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_113_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_113_229_16266_237_1712: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_113_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_113_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_113_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I231_113_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_113_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I231_113_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_113_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_231_114: {
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
  View_I231_114_153_138: {
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
  View_231_115: {
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
  View_231_116: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_231_118: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 24
  },
  Text_231_118: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_231_119: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.04166666666668%"),
    top: 18,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_231_120: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_120_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_231_121: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_121_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_231_122: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333329%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I231_122_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: 8
  },
  View_I231_122_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 10
  },
  Text_I231_122_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_231_123: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 72,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_123_0_909: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_123_0_909_153_6159: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_123_0_909_0_890: {
    flexGrow: 1,
    width: wp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555564%"),
    top: 15
  },
  Text_I231_123_0_909_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_123_0_909_0_892: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I231_123_0_906: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666679%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_123_0_906_153_6159: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_123_0_906_0_890: {
    flexGrow: 1,
    width: wp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333329%"),
    top: 15
  },
  Text_I231_123_0_906_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_123_0_906_0_892: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I231_123_0_905: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333336%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_123_0_905_153_6263: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_123_0_905_0_897: {
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: 15
  },
  Text_I231_123_0_905_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_123_0_905_0_896: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I231_123_0_905_0_896_0_342: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
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
  View_231_124: {
    width: wp("42.5%"),
    height: 676,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_231_585: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_585_76_9833: {
    flexGrow: 1,
    width: wp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_585_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_586: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 56,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_586_76_9833: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_586_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_587: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 112,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_587_76_9833: {
    flexGrow: 1,
    width: wp("9.027777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_587_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_588: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 168,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_588_76_9833: {
    flexGrow: 1,
    width: wp("7.291666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_588_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_589: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 224,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_589_76_9833: {
    flexGrow: 1,
    width: wp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_589_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_590: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 280,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_590_76_9833: {
    flexGrow: 1,
    width: wp("5.208333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 16
  },
  Text_I231_590_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_231_132: {
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
  View_I231_132_196_1177: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_132_196_1177_153_6263: {
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
  View_I231_132_196_1177_0_897: {
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_132_196_1177_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_196_1177_0_896: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I231_132_196_1177_0_896_0_342: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
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
  View_I231_132_153_6134: {
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
  View_I231_132_153_6134_153_6159: {
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
  View_I231_132_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_132_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6134_0_892: {
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
  View_I231_132_153_6135: {
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
  View_I231_132_153_6135_153_6159: {
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
  View_I231_132_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_132_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6135_0_892: {
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
  View_I231_132_153_6136: {
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
  View_I231_132_153_6136_153_6159: {
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
  View_I231_132_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_132_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6136_0_892: {
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
  View_I231_132_153_6144: {
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
  View_I231_132_153_6144_153_6159: {
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
  View_I231_132_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_132_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6144_0_892: {
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
  View_I231_132_153_6147: {
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
  View_I231_132_153_6147_153_6159: {
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
  View_I231_132_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I231_132_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6147_0_892: {
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
  View_I231_132_153_6150: {
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
  View_I231_132_153_6150_153_6159: {
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
  View_I231_132_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_132_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6150_0_892: {
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
  View_I231_132_153_6153: {
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
  View_I231_132_153_6153_153_6159: {
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
  View_I231_132_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_132_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6153_0_892: {
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
  View_I231_132_153_6156: {
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
  View_I231_132_153_6156_153_6159: {
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
  View_I231_132_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I231_132_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_132_153_6156_0_892: {
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
  View_231_133: {
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
  View_I231_133_153_6108: {
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
  ImageBackground_I231_133_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_133_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_133_153_6116: {
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
  View_I231_133_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_133_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I231_133_153_6118: {
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
