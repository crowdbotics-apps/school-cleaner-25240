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
      <View style={styles.View_246_437}>
        <View style={styles.View_246_438}>
          <View style={styles.View_246_439}>
            <View style={styles.View_246_440}>
              <View style={styles.View_I246_440_153_5917}>
                <View style={styles.View_I246_440_153_5898}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                    }}
                    style={styles.ImageBackground_I246_440_153_5900}
                  />
                  <View style={styles.View_I246_440_153_5941} />
                </View>
                <View style={styles.View_I246_440_153_5902}>
                  <View style={styles.View_I246_440_153_5903}>
                    <View style={styles.View_I246_440_153_5904}>
                      <Text style={styles.Text_I246_440_153_5904}>
                        St. Xaviers International School
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                      }}
                      style={styles.ImageBackground_I246_440_153_5905}
                    />
                  </View>
                  <View style={styles.View_I246_440_153_5906}>
                    <Text style={styles.Text_I246_440_153_5906}>
                      4 Sections | 12 Rooms
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I246_440_153_5907}>
                <View style={styles.View_I246_440_153_5908}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                    }}
                    style={styles.ImageBackground_I246_440_153_5908_138_29}
                  />
                  <View style={styles.View_I246_440_153_5908_0_2104}>
                    <Text style={styles.Text_I246_440_153_5908_0_2104}>
                      show details
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I246_440_153_5909}>
                  <View style={styles.View_I246_440_153_5909_0_230} />
                </View>
              </View>
            </View>
            <View style={styles.View_246_441}>
              <View style={styles.View_I246_441_153_5917}>
                <View style={styles.View_I246_441_153_5898}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                    }}
                    style={styles.ImageBackground_I246_441_153_6015}
                  />
                  <View style={styles.View_I246_441_153_5941} />
                </View>
                <View style={styles.View_I246_441_153_5902}>
                  <View style={styles.View_I246_441_153_5903}>
                    <View style={styles.View_I246_441_153_5904}>
                      <Text style={styles.Text_I246_441_153_5904}>
                        Eddison High School
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                      }}
                      style={styles.ImageBackground_I246_441_153_5905}
                    />
                  </View>
                  <View style={styles.View_I246_441_153_5906}>
                    <Text style={styles.Text_I246_441_153_5906}>
                      4 Sections | 12 Rooms
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I246_441_153_5907}>
                <View style={styles.View_I246_441_153_5908}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                    }}
                    style={styles.ImageBackground_I246_441_153_5908_138_29}
                  />
                  <View style={styles.View_I246_441_153_5908_0_2104}>
                    <Text style={styles.Text_I246_441_153_5908_0_2104}>
                      show details
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I246_441_153_5909}>
                  <View style={styles.View_I246_441_153_5909_0_230} />
                </View>
              </View>
            </View>
            <View style={styles.View_246_442}>
              <View style={styles.View_I246_442_153_5917}>
                <View style={styles.View_I246_442_153_5898}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                    }}
                    style={styles.ImageBackground_I246_442_153_6014}
                  />
                  <View style={styles.View_I246_442_153_5941} />
                </View>
                <View style={styles.View_I246_442_153_5902}>
                  <View style={styles.View_I246_442_153_5903}>
                    <View style={styles.View_I246_442_153_5904}>
                      <Text style={styles.Text_I246_442_153_5904}>
                        Hayden High School
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                      }}
                      style={styles.ImageBackground_I246_442_153_5905}
                    />
                  </View>
                  <View style={styles.View_I246_442_153_5906}>
                    <Text style={styles.Text_I246_442_153_5906}>
                      4 Sections | 12 Rooms
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I246_442_153_5907}>
                <View style={styles.View_I246_442_153_5908}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                    }}
                    style={styles.ImageBackground_I246_442_153_5908_138_29}
                  />
                  <View style={styles.View_I246_442_153_5908_0_2104}>
                    <Text style={styles.Text_I246_442_153_5908_0_2104}>
                      show details
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I246_442_153_5909}>
                  <View style={styles.View_I246_442_153_5909_0_230} />
                </View>
              </View>
            </View>
            <View style={styles.View_246_443}>
              <View style={styles.View_I246_443_153_5917}>
                <View style={styles.View_I246_443_153_5898}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                    }}
                    style={styles.ImageBackground_I246_443_153_5899}
                  />
                  <View style={styles.View_I246_443_153_5941} />
                </View>
                <View style={styles.View_I246_443_153_5902}>
                  <View style={styles.View_I246_443_153_5903}>
                    <View style={styles.View_I246_443_153_5904}>
                      <Text style={styles.Text_I246_443_153_5904}>
                        St. Andrews Public School
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                      }}
                      style={styles.ImageBackground_I246_443_153_5905}
                    />
                  </View>
                  <View style={styles.View_I246_443_153_5906}>
                    <Text style={styles.Text_I246_443_153_5906}>
                      4 Sections | 12 Rooms
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I246_443_153_5907}>
                <View style={styles.View_I246_443_153_5908}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                    }}
                    style={styles.ImageBackground_I246_443_153_5908_138_29}
                  />
                  <View style={styles.View_I246_443_153_5908_0_2104}>
                    <Text style={styles.Text_I246_443_153_5908_0_2104}>
                      show details
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I246_443_153_5909}>
                  <View style={styles.View_I246_443_153_5909_0_230} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_246_444}>
            <View style={styles.View_I246_444_153_130}>
              <View style={styles.View_I246_444_153_130_0_230} />
            </View>
            <View style={styles.View_I246_444_189_362}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                }}
                style={styles.ImageBackground_I246_444_189_362_138_29}
              />
              <View style={styles.View_I246_444_189_362_0_2104}>
                <Text style={styles.Text_I246_444_189_362_0_2104}>
                  Building
                </Text>
              </View>
            </View>
            <View style={styles.View_I246_444_186_25}>
              <View style={styles.View_I246_444_189_292}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                  }}
                  style={styles.ImageBackground_I246_444_153_132}
                />
              </View>
              <View style={styles.View_I246_444_153_136}>
                <View style={styles.View_I246_444_153_14}>
                  <Text style={styles.Text_I246_444_153_14}>John Doe</Text>
                </View>
                <View style={styles.View_I246_444_153_1}>
                  <Text style={styles.Text_I246_444_153_1}>Buildings</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I246_444_139_759}>
              <View style={styles.View_I246_444_139_761} />
              <View style={styles.View_I246_444_139_760}>
                <Text style={styles.Text_I246_444_139_760}>
                  leaning Services
                </Text>
              </View>
              <View style={styles.View_I246_444_189_305}>
                <Text style={styles.Text_I246_444_189_305}>C</Text>
              </View>
            </View>
            <View style={styles.View_I246_444_229_3960}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
                }}
                style={styles.ImageBackground_I246_444_229_2631}
              />
              <View style={styles.View_I246_444_229_1982}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I246_444_229_1982_229_1973}
                />
                <View style={styles.View_I246_444_229_1982_229_1975}>
                  <View style={styles.View_I246_444_229_1982_229_1976}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                      }}
                      style={styles.ImageBackground_I246_444_229_1982_229_1977}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                      }}
                      style={styles.ImageBackground_I246_444_229_1982_229_1979}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_246_445}>
          <View style={styles.View_I246_445_153_138} />
        </View>
        <View style={styles.View_246_446}>
          <View style={styles.View_246_447}>
            <View style={styles.View_246_448}>
              <View style={styles.View_246_449}>
                <View style={styles.View_246_450}>
                  <Text style={styles.Text_246_450}>Sections</Text>
                </View>
                <View style={styles.View_246_451}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                    }}
                    style={styles.ImageBackground_I246_451_138_29}
                  />
                  <View style={styles.View_I246_451_0_2104}>
                    <Text style={styles.Text_I246_451_0_2104}>section</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_246_452}>
                <View style={styles.View_I246_452_229_16266}>
                  <View style={styles.View_I246_452_229_16266_229_13447}>
                    <View style={styles.View_I246_452_229_16266_15_8179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                        }}
                        style={
                          styles.ImageBackground_I246_452_229_16266_15_8179_138_29
                        }
                      />
                      <View
                        style={styles.View_I246_452_229_16266_15_8179_0_2104}
                      >
                        <Text
                          style={styles.Text_I246_452_229_16266_15_8179_0_2104}
                        >
                          Room
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_452_229_16266_237_1712}>
                      <View style={styles.View_I246_452_229_16266_15_8168}>
                        <Text style={styles.Text_I246_452_229_16266_15_8168}>
                          12 rooms
                        </Text>
                      </View>
                      <View style={styles.View_I246_452_229_16266_15_8170}>
                        <Text style={styles.Text_I246_452_229_16266_15_8170}>
                          04 people{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_452_229_16266_15_8164}>
                      <Text style={styles.Text_I246_452_229_16266_15_8164}>
                        Section 1
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/0c40/8ea866567f35dc3a2f5fcdfa44e22ce8"
                      }}
                      style={styles.ImageBackground_I246_452_229_16266_15_8251}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_246_453}>
                <View style={styles.View_I246_453_229_16266}>
                  <View style={styles.View_I246_453_229_16266_229_13447}>
                    <View style={styles.View_I246_453_229_16266_15_8179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                        }}
                        style={
                          styles.ImageBackground_I246_453_229_16266_15_8179_138_29
                        }
                      />
                      <View
                        style={styles.View_I246_453_229_16266_15_8179_0_2104}
                      >
                        <Text
                          style={styles.Text_I246_453_229_16266_15_8179_0_2104}
                        >
                          Room
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_453_229_16266_237_1712}>
                      <View style={styles.View_I246_453_229_16266_15_8168}>
                        <Text style={styles.Text_I246_453_229_16266_15_8168}>
                          12 rooms
                        </Text>
                      </View>
                      <View style={styles.View_I246_453_229_16266_15_8170}>
                        <Text style={styles.Text_I246_453_229_16266_15_8170}>
                          04 people{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_453_229_16266_15_8164}>
                      <Text style={styles.Text_I246_453_229_16266_15_8164}>
                        Section 2
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/0c40/8ea866567f35dc3a2f5fcdfa44e22ce8"
                      }}
                      style={styles.ImageBackground_I246_453_229_16266_15_8251}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_246_454}>
                <View style={styles.View_I246_454_229_16266}>
                  <View style={styles.View_I246_454_229_16266_229_13447}>
                    <View style={styles.View_I246_454_229_16266_15_8179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                        }}
                        style={
                          styles.ImageBackground_I246_454_229_16266_15_8179_138_29
                        }
                      />
                      <View
                        style={styles.View_I246_454_229_16266_15_8179_0_2104}
                      >
                        <Text
                          style={styles.Text_I246_454_229_16266_15_8179_0_2104}
                        >
                          Room
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_454_229_16266_237_1712}>
                      <View style={styles.View_I246_454_229_16266_15_8168}>
                        <Text style={styles.Text_I246_454_229_16266_15_8168}>
                          12 rooms
                        </Text>
                      </View>
                      <View style={styles.View_I246_454_229_16266_15_8170}>
                        <Text style={styles.Text_I246_454_229_16266_15_8170}>
                          04 people{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_454_229_16266_15_8164}>
                      <Text style={styles.Text_I246_454_229_16266_15_8164}>
                        Section 3
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/0c40/8ea866567f35dc3a2f5fcdfa44e22ce8"
                      }}
                      style={styles.ImageBackground_I246_454_229_16266_15_8251}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_246_455}>
                <View style={styles.View_I246_455_229_16266}>
                  <View style={styles.View_I246_455_229_16266_229_13447}>
                    <View style={styles.View_I246_455_229_16266_15_8179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                        }}
                        style={
                          styles.ImageBackground_I246_455_229_16266_15_8179_138_29
                        }
                      />
                      <View
                        style={styles.View_I246_455_229_16266_15_8179_0_2104}
                      >
                        <Text
                          style={styles.Text_I246_455_229_16266_15_8179_0_2104}
                        >
                          Room
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_455_229_16266_237_1712}>
                      <View style={styles.View_I246_455_229_16266_15_8168}>
                        <Text style={styles.Text_I246_455_229_16266_15_8168}>
                          12 rooms
                        </Text>
                      </View>
                      <View style={styles.View_I246_455_229_16266_15_8170}>
                        <Text style={styles.Text_I246_455_229_16266_15_8170}>
                          04 people{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_455_229_16266_15_8164}>
                      <Text style={styles.Text_I246_455_229_16266_15_8164}>
                        Section 4
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/0c40/8ea866567f35dc3a2f5fcdfa44e22ce8"
                      }}
                      style={styles.ImageBackground_I246_455_229_16266_15_8251}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_246_456}>
                <View style={styles.View_I246_456_229_16266}>
                  <View style={styles.View_I246_456_229_16266_229_13447}>
                    <View style={styles.View_I246_456_229_16266_15_8179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                        }}
                        style={
                          styles.ImageBackground_I246_456_229_16266_15_8179_138_29
                        }
                      />
                      <View
                        style={styles.View_I246_456_229_16266_15_8179_0_2104}
                      >
                        <Text
                          style={styles.Text_I246_456_229_16266_15_8179_0_2104}
                        >
                          Room
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_456_229_16266_237_1712}>
                      <View style={styles.View_I246_456_229_16266_15_8168}>
                        <Text style={styles.Text_I246_456_229_16266_15_8168}>
                          12 rooms
                        </Text>
                      </View>
                      <View style={styles.View_I246_456_229_16266_15_8170}>
                        <Text style={styles.Text_I246_456_229_16266_15_8170}>
                          04 people{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I246_456_229_16266_15_8164}>
                      <Text style={styles.Text_I246_456_229_16266_15_8164}>
                        Section 5
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/0c40/8ea866567f35dc3a2f5fcdfa44e22ce8"
                      }}
                      style={styles.ImageBackground_I246_456_229_16266_15_8251}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_246_457}>
              <View style={styles.View_I246_457_153_138} />
            </View>
            <View style={styles.View_246_458}>
              <View style={styles.View_246_459}>
                <View style={styles.View_246_461}>
                  <Text style={styles.Text_246_461}>Section 1</Text>
                </View>
                <View style={styles.View_246_462}>
                  <View style={styles.View_246_463}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e3e/6996/0c1fd8fbb6404e7f0b32d3fff73aa443"
                      }}
                      style={styles.ImageBackground_I246_463_138_29}
                    />
                  </View>
                  <View style={styles.View_246_464}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d83b/c54f/febea4b7e822f3bc6c247383b3167955"
                      }}
                      style={styles.ImageBackground_I246_464_138_29}
                    />
                  </View>
                  <View style={styles.View_246_465}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
                      }}
                      style={styles.ImageBackground_I246_465_138_29}
                    />
                    <View style={styles.View_I246_465_0_2104}>
                      <Text style={styles.Text_I246_465_0_2104}>Room</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_246_466}>
                <View style={styles.View_I246_466_0_909}>
                  <View style={styles.View_I246_466_0_909_153_6263}>
                    <View style={styles.View_I246_466_0_909_0_897}>
                      <Text style={styles.Text_I246_466_0_909_0_897}>
                        Details
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I246_466_0_909_0_896}>
                    <View style={styles.View_I246_466_0_909_0_896_0_342} />
                  </View>
                </View>
                <View style={styles.View_I246_466_0_906}>
                  <View style={styles.View_I246_466_0_906_153_6159}>
                    <View style={styles.View_I246_466_0_906_0_890}>
                      <Text style={styles.Text_I246_466_0_906_0_890}>
                        Rooms
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I246_466_0_906_0_892} />
                </View>
                <View style={styles.View_I246_466_0_905}>
                  <View style={styles.View_I246_466_0_905_153_6159}>
                    <View style={styles.View_I246_466_0_905_0_890}>
                      <Text style={styles.Text_I246_466_0_905_0_890}>
                        People
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I246_466_0_905_0_892} />
                </View>
              </View>
              <View style={styles.View_246_467}>
                <View style={styles.View_246_468}>
                  <View style={styles.View_I246_468_190_250}>
                    <View style={styles.View_I246_468_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_468_154_428}>
                    <Text style={styles.Text_I246_468_154_428}>Cleaner</Text>
                  </View>
                  <View style={styles.View_I246_468_154_433}>
                    <Text style={styles.Text_I246_468_154_433}>John Doe</Text>
                  </View>
                </View>
                <View style={styles.View_246_469}>
                  <View style={styles.View_I246_469_190_250}>
                    <View style={styles.View_I246_469_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_469_154_428}>
                    <Text style={styles.Text_I246_469_154_428}>Sq. ft.</Text>
                  </View>
                  <View style={styles.View_I246_469_154_433}>
                    <Text style={styles.Text_I246_469_154_433}>14756</Text>
                  </View>
                </View>
                <View style={styles.View_246_470}>
                  <View style={styles.View_I246_470_190_250}>
                    <View style={styles.View_I246_470_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_470_154_428}>
                    <Text style={styles.Text_I246_470_154_428}>Desks</Text>
                  </View>
                  <View style={styles.View_I246_470_154_433}>
                    <Text style={styles.Text_I246_470_154_433}>235</Text>
                  </View>
                </View>
                <View style={styles.View_246_471}>
                  <View style={styles.View_I246_471_190_250}>
                    <View style={styles.View_I246_471_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_471_154_428}>
                    <Text style={styles.Text_I246_471_154_428}>Windows</Text>
                  </View>
                  <View style={styles.View_I246_471_154_433}>
                    <Text style={styles.Text_I246_471_154_433}>29</Text>
                  </View>
                </View>
                <View style={styles.View_246_472}>
                  <View style={styles.View_I246_472_190_250}>
                    <View style={styles.View_I246_472_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_472_154_428}>
                    <Text style={styles.Text_I246_472_154_428}>Trash cans</Text>
                  </View>
                  <View style={styles.View_I246_472_154_433}>
                    <Text style={styles.Text_I246_472_154_433}>20</Text>
                  </View>
                </View>
                <View style={styles.View_246_473}>
                  <View style={styles.View_I246_473_190_250}>
                    <View style={styles.View_I246_473_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_473_154_428}>
                    <Text style={styles.Text_I246_473_154_428}>
                      Paper towel dispensers
                    </Text>
                  </View>
                  <View style={styles.View_I246_473_154_433}>
                    <Text style={styles.Text_I246_473_154_433}>20</Text>
                  </View>
                </View>
                <View style={styles.View_246_474}>
                  <View style={styles.View_I246_474_190_250}>
                    <View style={styles.View_I246_474_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_474_154_428}>
                    <Text style={styles.Text_I246_474_154_428}>
                      Toiler tissue dispensers
                    </Text>
                  </View>
                  <View style={styles.View_I246_474_154_433}>
                    <Text style={styles.Text_I246_474_154_433}>25</Text>
                  </View>
                </View>
                <View style={styles.View_246_475}>
                  <View style={styles.View_I246_475_190_250}>
                    <View style={styles.View_I246_475_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_475_154_428}>
                    <Text style={styles.Text_I246_475_154_428}>
                      Hand soap dispensers
                    </Text>
                  </View>
                  <View style={styles.View_I246_475_154_433}>
                    <Text style={styles.Text_I246_475_154_433}>20</Text>
                  </View>
                </View>
                <View style={styles.View_246_476}>
                  <View style={styles.View_I246_476_190_250}>
                    <View style={styles.View_I246_476_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_476_154_428}>
                    <Text style={styles.Text_I246_476_154_428}>
                      Hand sanitizer dispensers
                    </Text>
                  </View>
                  <View style={styles.View_I246_476_154_433}>
                    <Text style={styles.Text_I246_476_154_433}>20</Text>
                  </View>
                </View>
                <View style={styles.View_246_477}>
                  <View style={styles.View_I246_477_190_250}>
                    <View style={styles.View_I246_477_190_250_0_230} />
                  </View>
                  <View style={styles.View_I246_477_154_428}>
                    <Text style={styles.Text_I246_477_154_428}>
                      Estimated time to clean
                    </Text>
                  </View>
                  <View style={styles.View_I246_477_154_433}>
                    <Text style={styles.Text_I246_477_154_433}>
                      6 hrs 21 minutes
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_246_478}>
            <View style={styles.View_I246_478_196_1177}>
              <View style={styles.View_I246_478_196_1177_153_6263}>
                <View style={styles.View_I246_478_196_1177_0_897}>
                  <Text style={styles.Text_I246_478_196_1177_0_897}>
                    overview
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_196_1177_0_896}>
                <View style={styles.View_I246_478_196_1177_0_896_0_342} />
              </View>
            </View>
            <View style={styles.View_I246_478_153_6134}>
              <View style={styles.View_I246_478_153_6134_153_6159}>
                <View style={styles.View_I246_478_153_6134_0_890}>
                  <Text style={styles.Text_I246_478_153_6134_0_890}>
                    {" "}
                    report
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6134_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6135}>
              <View style={styles.View_I246_478_153_6135_153_6159}>
                <View style={styles.View_I246_478_153_6135_0_890}>
                  <Text style={styles.Text_I246_478_153_6135_0_890}>
                    Inspections
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6135_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6136}>
              <View style={styles.View_I246_478_153_6136_153_6159}>
                <View style={styles.View_I246_478_153_6136_0_890}>
                  <Text style={styles.Text_I246_478_153_6136_0_890}>
                    People
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6136_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6144}>
              <View style={styles.View_I246_478_153_6144_153_6159}>
                <View style={styles.View_I246_478_153_6144_0_890}>
                  <Text style={styles.Text_I246_478_153_6144_0_890}>
                    Budgeting
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6144_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6147}>
              <View style={styles.View_I246_478_153_6147_153_6159}>
                <View style={styles.View_I246_478_153_6147_0_890}>
                  <Text style={styles.Text_I246_478_153_6147_0_890}>
                    products needed
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6147_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6150}>
              <View style={styles.View_I246_478_153_6150_153_6159}>
                <View style={styles.View_I246_478_153_6150_0_890}>
                  <Text style={styles.Text_I246_478_153_6150_0_890}>
                    savings
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6150_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6153}>
              <View style={styles.View_I246_478_153_6153_153_6159}>
                <View style={styles.View_I246_478_153_6153_0_890}>
                  <Text style={styles.Text_I246_478_153_6153_0_890}>
                    cleaning methods
                  </Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6153_0_892} />
            </View>
            <View style={styles.View_I246_478_153_6156}>
              <View style={styles.View_I246_478_153_6156_153_6159}>
                <View style={styles.View_I246_478_153_6156_0_890}>
                  <Text style={styles.Text_I246_478_153_6156_0_890}>sds</Text>
                </View>
              </View>
              <View style={styles.View_I246_478_153_6156_0_892} />
            </View>
          </View>
          <View style={styles.View_246_479}>
            <View style={styles.View_I246_479_153_6108}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
                }}
                style={styles.ImageBackground_I246_479_153_6113}
              />
              <View style={styles.View_I246_479_153_6114} />
            </View>
            <View style={styles.View_I246_479_153_6116}>
              <View style={styles.View_I246_479_153_6117}>
                <Text style={styles.Text_I246_479_153_6117}>
                  Eddison High School
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                }}
                style={styles.ImageBackground_I246_479_153_6118}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_246_480} />
      <View style={styles.View_246_481}>
        <View style={styles.View_246_482} />
        <View style={styles.View_246_483}>
          <View style={styles.View_I246_483_0_2116}>
            <Text style={styles.Text_I246_483_0_2116}>create</Text>
          </View>
        </View>
        <View style={styles.View_246_484}>
          <View style={styles.View_246_485}>
            <View style={styles.View_I246_485_0_774}>
              <View style={styles.View_I246_485_0_778} />
              <View style={styles.View_I246_485_0_779} />
            </View>
            <View style={styles.View_I246_485_0_781}>
              <Text style={styles.Text_I246_485_0_781}>
                Don Bosco High School
              </Text>
            </View>
            <View style={styles.View_I246_485_76_10666}>
              <View style={styles.View_I246_485_0_776}>
                <Text style={styles.Text_I246_485_0_776}>School Name</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_246_486}>
            <View style={styles.View_246_487}>
              <View style={styles.View_246_488}>
                <Text style={styles.Text_246_488}>
                  Drag &amp; drop the image in this section
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e22/b707/74cda39799ff9cb0589e2685cb207478"
                }}
                style={styles.ImageBackground_246_834}
              />
            </View>
            <View style={styles.View_246_489}>
              <View style={styles.View_I246_489_0_148}>
                <Text style={styles.Text_I246_489_0_148}>select IMage</Text>
              </View>
            </View>
            <View style={styles.View_246_490}>
              <Text style={styles.Text_246_490}>Building Image</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_246_491}>
          <Text style={styles.Text_246_491}>Add Building</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_246_437: {
    flexGrow: 1,
    width: wp("100%"),
    height: 1024,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_246_438: {
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
  View_246_439: {
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
  View_246_440: {
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
  View_I246_440_153_5917: {
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
  View_I246_440_153_5898: {
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
  ImageBackground_I246_440_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I246_440_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_440_153_5902: {
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
  View_I246_440_153_5903: {
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
  View_I246_440_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_440_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_440_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I246_440_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I246_440_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_440_153_5907: {
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
  View_I246_440_153_5908: {
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
  ImageBackground_I246_440_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I246_440_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I246_440_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_440_153_5909: {
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
  View_I246_440_153_5909_0_230: {
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
  View_246_441: {
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
  View_I246_441_153_5917: {
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
  View_I246_441_153_5898: {
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
  ImageBackground_I246_441_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I246_441_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_441_153_5902: {
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
  View_I246_441_153_5903: {
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
  View_I246_441_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_441_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_441_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I246_441_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I246_441_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_441_153_5907: {
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
  View_I246_441_153_5908: {
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
  ImageBackground_I246_441_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I246_441_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I246_441_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_441_153_5909: {
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
  View_I246_441_153_5909_0_230: {
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
  View_246_442: {
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
  View_I246_442_153_5917: {
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
  View_I246_442_153_5898: {
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
  ImageBackground_I246_442_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I246_442_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_442_153_5902: {
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
  View_I246_442_153_5903: {
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
  View_I246_442_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_442_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_442_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I246_442_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I246_442_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_442_153_5907: {
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
  View_I246_442_153_5908: {
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
  ImageBackground_I246_442_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I246_442_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I246_442_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_442_153_5909: {
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
  View_I246_442_153_5909_0_230: {
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
  View_246_443: {
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
  View_I246_443_153_5917: {
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
  View_I246_443_153_5898: {
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
  ImageBackground_I246_443_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I246_443_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_443_153_5902: {
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
  View_I246_443_153_5903: {
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
  View_I246_443_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_443_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_443_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I246_443_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I246_443_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_443_153_5907: {
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
  View_I246_443_153_5908: {
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
  ImageBackground_I246_443_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I246_443_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I246_443_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_443_153_5909: {
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
  View_I246_443_153_5909_0_230: {
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
  View_246_444: {
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
  View_I246_444_153_130: {
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
  View_I246_444_153_130_0_230: {
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
  View_I246_444_189_362: {
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
  ImageBackground_I246_444_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_444_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_444_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_444_186_25: {
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
  View_I246_444_189_292: {
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
  ImageBackground_I246_444_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_444_153_136: {
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
  View_I246_444_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_444_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I246_444_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I246_444_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I246_444_139_759: {
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
  View_I246_444_139_761: {
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
  View_I246_444_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I246_444_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I246_444_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I246_444_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I246_444_229_3960: {
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
  ImageBackground_I246_444_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_444_229_1982: {
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
  View_I246_444_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I246_444_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I246_444_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I246_444_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I246_444_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_246_445: {
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
  View_I246_445_153_138: {
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
  View_246_446: {
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
  View_246_447: {
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
  View_246_448: {
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
  View_246_449: {
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
  View_246_450: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6
  },
  Text_246_450: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_451: {
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
  ImageBackground_I246_451_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_I246_451_0_2104: {
    flexGrow: 1,
    width: wp("4.513888888888888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 10
  },
  Text_I246_451_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_246_452: {
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
  View_I246_452_229_16266: {
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
  View_I246_452_229_16266_229_13447: {
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
  View_I246_452_229_16266_15_8179: {
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
  ImageBackground_I246_452_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_452_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_452_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_452_229_16266_237_1712: {
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
  View_I246_452_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_452_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_452_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I246_452_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_452_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I246_452_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_452_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_246_453: {
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
  View_I246_453_229_16266: {
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
  View_I246_453_229_16266_229_13447: {
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
  View_I246_453_229_16266_15_8179: {
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
  ImageBackground_I246_453_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_453_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_453_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_453_229_16266_237_1712: {
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
  View_I246_453_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_453_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_453_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I246_453_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_453_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I246_453_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_453_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_246_454: {
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
  View_I246_454_229_16266: {
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
  View_I246_454_229_16266_229_13447: {
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
  View_I246_454_229_16266_15_8179: {
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
  ImageBackground_I246_454_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_454_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_454_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_454_229_16266_237_1712: {
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
  View_I246_454_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_454_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_454_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I246_454_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_454_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I246_454_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_454_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_246_455: {
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
  View_I246_455_229_16266: {
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
  View_I246_455_229_16266_229_13447: {
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
  View_I246_455_229_16266_15_8179: {
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
  ImageBackground_I246_455_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_455_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_455_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_455_229_16266_237_1712: {
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
  View_I246_455_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_455_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_455_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I246_455_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_455_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I246_455_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_455_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_246_456: {
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
  View_I246_456_229_16266: {
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
  View_I246_456_229_16266_229_13447: {
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
  View_I246_456_229_16266_15_8179: {
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
  ImageBackground_I246_456_229_16266_15_8179_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I246_456_229_16266_15_8179_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I246_456_229_16266_15_8179_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_456_229_16266_237_1712: {
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
  View_I246_456_229_16266_15_8168: {
    width: wp("4.236111111111112%"),
    minWidth: wp("4.236111111111112%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_456_229_16266_15_8168: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_456_229_16266_15_8170: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_I246_456_229_16266_15_8170: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I246_456_229_16266_15_8164: {
    flexGrow: 1,
    width: wp("21.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16
  },
  Text_I246_456_229_16266_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_456_229_16266_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.194444444444443%")
  },
  View_246_457: {
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
  View_I246_457_153_138: {
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
  View_246_458: {
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
  View_246_459: {
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
  View_246_461: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 24
  },
  Text_246_461: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_462: {
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
  View_246_463: {
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
  ImageBackground_I246_463_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_246_464: {
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
  ImageBackground_I246_464_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: 8
  },
  View_246_465: {
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
  ImageBackground_I246_465_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: 8
  },
  View_I246_465_0_2104: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 10
  },
  Text_I246_465_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_246_466: {
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
  View_I246_466_0_909: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I246_466_0_909_153_6263: {
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
  View_I246_466_0_909_0_897: {
    width: wp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555564%"),
    top: 15
  },
  Text_I246_466_0_909_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_466_0_909_0_896: {
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
  View_I246_466_0_909_0_896_0_342: {
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
  View_I246_466_0_906: {
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
  View_I246_466_0_906_153_6159: {
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
  View_I246_466_0_906_0_890: {
    flexGrow: 1,
    width: wp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333329%"),
    top: 15
  },
  Text_I246_466_0_906_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_466_0_906_0_892: {
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
  View_I246_466_0_905: {
    flexGrow: 1,
    width: wp("14.166666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333336%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_466_0_905_153_6159: {
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
  View_I246_466_0_905_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: 15
  },
  Text_I246_466_0_905_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_466_0_905_0_892: {
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
  View_246_467: {
    width: wp("42.5%"),
    height: 496,
    minHeight: 496,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_246_468: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_468_190_250: {
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
  View_I246_468_190_250_0_230: {
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
  View_I246_468_154_428: {
    flexGrow: 1,
    width: wp("3.888888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_468_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_468_154_433: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.59722222222222%"),
    top: 12
  },
  Text_I246_468_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_469: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 64,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_469_190_250: {
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
  View_I246_469_190_250_0_230: {
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
  View_I246_469_154_428: {
    flexGrow: 1,
    width: wp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_469_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_469_154_433: {
    flexGrow: 1,
    width: wp("3.2638888888888893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.12500000000001%"),
    top: 12
  },
  Text_I246_469_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_470: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 112,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_470_190_250: {
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
  View_I246_470_190_250_0_230: {
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
  View_I246_470_154_428: {
    flexGrow: 1,
    width: wp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_470_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_470_154_433: {
    flexGrow: 1,
    width: wp("1.9444444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444445%"),
    top: 12
  },
  Text_I246_470_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_471: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_471_190_250: {
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
  View_I246_471_190_250_0_230: {
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
  View_I246_471_154_428: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_471_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_471_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_471_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_472: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 208,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_472_190_250: {
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
  View_I246_472_190_250_0_230: {
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
  View_I246_472_154_428: {
    flexGrow: 1,
    width: wp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_472_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_472_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_472_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_473: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 256,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_473_190_250: {
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
  View_I246_473_190_250_0_230: {
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
  View_I246_473_154_428: {
    flexGrow: 1,
    width: wp("11.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_473_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_473_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_473_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_474: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 304,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_474_190_250: {
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
  View_I246_474_190_250_0_230: {
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
  View_I246_474_154_428: {
    flexGrow: 1,
    width: wp("12.152777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_474_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_474_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_474_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_475: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 352,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_475_190_250: {
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
  View_I246_475_190_250_0_230: {
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
  View_I246_475_154_428: {
    flexGrow: 1,
    width: wp("11.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_475_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_475_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_475_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_476: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 400,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_476_190_250: {
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
  View_I246_476_190_250_0_230: {
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
  View_I246_476_154_428: {
    flexGrow: 1,
    width: wp("13.26388888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_476_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_476_154_433: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.06944444444445%"),
    top: 12
  },
  Text_I246_476_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_477: {
    width: wp("42.5%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 448,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I246_477_190_250: {
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
  View_I246_477_190_250_0_230: {
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
  View_I246_477_154_428: {
    flexGrow: 1,
    width: wp("12.01388888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 12
  },
  Text_I246_477_154_428: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I246_477_154_433: {
    flexGrow: 1,
    width: wp("8.541666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.847222222222236%"),
    top: 12
  },
  Text_I246_477_154_433: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_478: {
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
  View_I246_478_196_1177: {
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
  View_I246_478_196_1177_153_6263: {
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
  View_I246_478_196_1177_0_897: {
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I246_478_196_1177_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_196_1177_0_896: {
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
  View_I246_478_196_1177_0_896_0_342: {
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
  View_I246_478_153_6134: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.638888888888886%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6134_153_6159: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I246_478_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6134_0_892: {
    flexGrow: 1,
    width: wp("6.666666666666667%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I246_478_153_6135: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.30555555555555%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6135_153_6159: {
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
  View_I246_478_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I246_478_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6135_0_892: {
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
  View_I246_478_153_6136: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.611111111111107%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6136_153_6159: {
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
  View_I246_478_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I246_478_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6136_0_892: {
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
  View_I246_478_153_6144: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.861111111111107%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6144_153_6159: {
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
  View_I246_478_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I246_478_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6144_0_892: {
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
  View_I246_478_153_6147: {
    flexGrow: 1,
    width: wp("12.291666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.125%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6147_153_6159: {
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
  View_I246_478_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I246_478_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6147_0_892: {
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
  View_I246_478_153_6150: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.41666666666666%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6150_153_6159: {
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
  View_I246_478_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I246_478_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6150_0_892: {
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
  View_I246_478_153_6153: {
    flexGrow: 1,
    width: wp("13.055555555555557%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.22222222222223%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6153_153_6159: {
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
  View_I246_478_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I246_478_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6153_0_892: {
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
  View_I246_478_153_6156: {
    flexGrow: 1,
    width: wp("4.236111111111112%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_478_153_6156_153_6159: {
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
  View_I246_478_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111285%"),
    top: 15
  },
  Text_I246_478_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I246_478_153_6156_0_892: {
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
  View_246_479: {
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
  View_I246_479_153_6108: {
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
  ImageBackground_I246_479_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I246_479_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I246_479_153_6116: {
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
  View_I246_479_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I246_479_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I246_479_153_6118: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.875%")
  },
  View_246_480: {
    width: wp("100%"),
    height: 1024,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.4000000059604645
  },
  View_246_481: {
    width: wp("38.88888888888889%"),
    height: 502,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.555555555555557%"),
    top: 261,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_246_482: {
    width: wp("38.88888888888889%"),
    height: 502,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_246_483: {
    width: wp("6.944444444444445%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 422,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I246_483_0_2116: {
    flexGrow: 1,
    width: wp("3.958333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4930555555555571%"),
    top: 16
  },
  Text_I246_483_0_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_246_484: {
    width: wp("33.33333333333333%"),
    height: 284,
    minHeight: 284,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 114,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_246_485: {
    width: wp("33.33333333333333%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 8,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_485_0_774: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I246_485_0_778: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(98, 0, 238, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I246_485_0_779: {
    flexGrow: 1,
    width: wp("33.19444444444444%"),
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444997%"),
    top: 1,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I246_485_0_781: {
    flexGrow: 1,
    width: wp("31.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I246_485_0_781: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I246_485_76_10666: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: -8,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I246_485_0_776: {
    width: wp("5.277777777777778%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888573%"),
    top: 0
  },
  Text_I246_485_0_776: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_246_486: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 88,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_246_487: {
    flexGrow: 1,
    width: wp("33.33333333333333%"),
    height: 148,
    minHeight: 148,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 48,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_246_488: {
    width: wp("16.52777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.402777777777786%"),
    top: 64
  },
  Text_246_488: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  ImageBackground_246_834: {
    width: wp("33.33333333333333%"),
    height: 148,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_246_489: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.47222222222223%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I246_489_0_148: {
    flexGrow: 1,
    width: wp("7.638888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 10
  },
  Text_I246_489_0_148: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_246_490: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 4
  },
  Text_246_490: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_246_491: {
    width: wp("13.26388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.847222222222221%"),
    top: 40
  },
  Text_246_491: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
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
