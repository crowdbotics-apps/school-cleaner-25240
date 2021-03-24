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
      <View style={styles.View_231_792}>
        <View style={styles.View_231_793}>
          <View style={styles.View_231_794}>
            <View style={styles.View_I231_794_153_5917}>
              <View style={styles.View_I231_794_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I231_794_153_5900}
                />
                <View style={styles.View_I231_794_153_5941} />
              </View>
              <View style={styles.View_I231_794_153_5902}>
                <View style={styles.View_I231_794_153_5903}>
                  <View style={styles.View_I231_794_153_5904}>
                    <Text style={styles.Text_I231_794_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_794_153_5905}
                  />
                </View>
                <View style={styles.View_I231_794_153_5906}>
                  <Text style={styles.Text_I231_794_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_794_153_5907}>
              <View style={styles.View_I231_794_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_794_153_5908_138_29}
                />
                <View style={styles.View_I231_794_153_5908_0_2104}>
                  <Text style={styles.Text_I231_794_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_794_153_5909}>
                <View style={styles.View_I231_794_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_795}>
            <View style={styles.View_I231_795_153_5917}>
              <View style={styles.View_I231_795_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I231_795_153_6015}
                />
                <View style={styles.View_I231_795_153_5941} />
              </View>
              <View style={styles.View_I231_795_153_5902}>
                <View style={styles.View_I231_795_153_5903}>
                  <View style={styles.View_I231_795_153_5904}>
                    <Text style={styles.Text_I231_795_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_795_153_5905}
                  />
                </View>
                <View style={styles.View_I231_795_153_5906}>
                  <Text style={styles.Text_I231_795_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_795_153_5907}>
              <View style={styles.View_I231_795_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_795_153_5908_138_29}
                />
                <View style={styles.View_I231_795_153_5908_0_2104}>
                  <Text style={styles.Text_I231_795_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_795_153_5909}>
                <View style={styles.View_I231_795_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_796}>
            <View style={styles.View_I231_796_153_5917}>
              <View style={styles.View_I231_796_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I231_796_153_6014}
                />
                <View style={styles.View_I231_796_153_5941} />
              </View>
              <View style={styles.View_I231_796_153_5902}>
                <View style={styles.View_I231_796_153_5903}>
                  <View style={styles.View_I231_796_153_5904}>
                    <Text style={styles.Text_I231_796_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_796_153_5905}
                  />
                </View>
                <View style={styles.View_I231_796_153_5906}>
                  <Text style={styles.Text_I231_796_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_796_153_5907}>
              <View style={styles.View_I231_796_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_796_153_5908_138_29}
                />
                <View style={styles.View_I231_796_153_5908_0_2104}>
                  <Text style={styles.Text_I231_796_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_796_153_5909}>
                <View style={styles.View_I231_796_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_231_797}>
            <View style={styles.View_I231_797_153_5917}>
              <View style={styles.View_I231_797_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I231_797_153_5899}
                />
                <View style={styles.View_I231_797_153_5941} />
              </View>
              <View style={styles.View_I231_797_153_5902}>
                <View style={styles.View_I231_797_153_5903}>
                  <View style={styles.View_I231_797_153_5904}>
                    <Text style={styles.Text_I231_797_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I231_797_153_5905}
                  />
                </View>
                <View style={styles.View_I231_797_153_5906}>
                  <Text style={styles.Text_I231_797_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I231_797_153_5907}>
              <View style={styles.View_I231_797_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I231_797_153_5908_138_29}
                />
                <View style={styles.View_I231_797_153_5908_0_2104}>
                  <Text style={styles.Text_I231_797_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I231_797_153_5909}>
                <View style={styles.View_I231_797_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_231_798}>
          <View style={styles.View_I231_798_153_130}>
            <View style={styles.View_I231_798_153_130_0_230} />
          </View>
          <View style={styles.View_I231_798_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I231_798_189_362_138_29}
            />
            <View style={styles.View_I231_798_189_362_0_2104}>
              <Text style={styles.Text_I231_798_189_362_0_2104}>Building</Text>
            </View>
          </View>
          <View style={styles.View_I231_798_186_25}>
            <View style={styles.View_I231_798_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/645c/c8da/029e927d98921dae9761aa3942c7d15e"
                }}
                style={styles.ImageBackground_I231_798_153_132}
              />
            </View>
            <View style={styles.View_I231_798_153_136}>
              <View style={styles.View_I231_798_153_14}>
                <Text style={styles.Text_I231_798_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I231_798_153_1}>
                <Text style={styles.Text_I231_798_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I231_798_139_759}>
            <View style={styles.View_I231_798_139_761} />
            <View style={styles.View_I231_798_139_760}>
              <Text style={styles.Text_I231_798_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I231_798_189_305}>
              <Text style={styles.Text_I231_798_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I231_798_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I231_798_229_2631}
            />
            <View style={styles.View_I231_798_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I231_798_229_1982_229_1973}
              />
              <View style={styles.View_I231_798_229_1982_229_1975}>
                <View style={styles.View_I231_798_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I231_798_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I231_798_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_231_799}>
        <View style={styles.View_I231_799_153_138} />
      </View>
      <View style={styles.View_231_800}>
        <View style={styles.View_231_801}>
          <View style={styles.View_231_802}>
            <View style={styles.View_231_803}>
              <Text style={styles.Text_231_803}>Sections</Text>
            </View>
            <View style={styles.View_231_804}>
              <View style={styles.View_I231_804_229_16080}>
                <View style={styles.View_I231_804_229_16080_229_10074}>
                  <View style={styles.View_I231_804_229_16080_229_9336}>
                    <View
                      style={styles.View_I231_804_229_16080_229_9336_153_138}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                    }}
                    style={styles.ImageBackground_I231_804_229_16080_229_4955}
                  />
                </View>
                <View style={styles.View_I231_804_229_16080_229_13447}>
                  <View style={styles.View_I231_804_229_16080_237_0}>
                    <View style={styles.View_I231_804_229_16080_237_1}>
                      <Text style={styles.Text_I231_804_229_16080_237_1}>
                        14756 sq ft
                      </Text>
                    </View>
                    <View style={styles.View_I231_804_229_16080_237_2}>
                      <Text style={styles.Text_I231_804_229_16080_237_2}>
                        235 desks
                      </Text>
                    </View>
                    <View style={styles.View_I231_804_229_16080_237_3}>
                      <Text style={styles.Text_I231_804_229_16080_237_3}>
                        21 windows
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I231_804_229_16080_15_8164}>
                    <Text style={styles.Text_I231_804_229_16080_15_8164}>
                      Section 1
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2924/69e6/92cd53dfb73fb68767e7e72f5458bcef"
                    }}
                    style={styles.ImageBackground_I231_804_229_16080_15_8251}
                  />
                </View>
              </View>
              <View style={styles.View_I231_804_229_16256}>
                <View style={styles.View_I231_804_229_16256_0_230} />
              </View>
              <View style={styles.View_I231_804_237_5886}>
                <View style={styles.View_I231_804_229_16372}>
                  <View style={styles.View_I231_804_229_16372_229_16317}>
                    <View style={styles.View_I231_804_229_16372_229_16318}>
                      <View
                        style={styles.View_I231_804_229_16372_229_16318_153_138}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                      }}
                      style={
                        styles.ImageBackground_I231_804_229_16372_229_16319
                      }
                    />
                  </View>
                  <View style={styles.View_I231_804_229_16372_229_16320}>
                    <View style={styles.View_I231_804_229_16372_230_12487}>
                      <View style={styles.View_I231_804_229_16372_229_16323}>
                        <Text style={styles.Text_I231_804_229_16372_229_16323}>
                          400 sq ft
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_229_16372_229_16322}>
                        <Text style={styles.Text_I231_804_229_16372_229_16322}>
                          21 desks
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_229_16372_229_16331}>
                        <Text style={styles.Text_I231_804_229_16372_229_16331}>
                          08 windows
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I231_804_229_16372_229_16324}>
                      <Text style={styles.Text_I231_804_229_16372_229_16324}>
                        Room 103
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I231_804_237_5967}>
                  <View style={styles.View_I231_804_237_5967_229_16317}>
                    <View style={styles.View_I231_804_237_5967_229_16318}>
                      <View
                        style={styles.View_I231_804_237_5967_229_16318_153_138}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                      }}
                      style={styles.ImageBackground_I231_804_237_5967_229_16319}
                    />
                  </View>
                  <View style={styles.View_I231_804_237_5967_229_16320}>
                    <View style={styles.View_I231_804_237_5967_230_12487}>
                      <View style={styles.View_I231_804_237_5967_229_16323}>
                        <Text style={styles.Text_I231_804_237_5967_229_16323}>
                          500 sq ft
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_5967_229_16322}>
                        <Text style={styles.Text_I231_804_237_5967_229_16322}>
                          22 desks
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_5967_229_16331}>
                        <Text style={styles.Text_I231_804_237_5967_229_16331}>
                          08 windows
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I231_804_237_5967_229_16324}>
                      <Text style={styles.Text_I231_804_237_5967_229_16324}>
                        Room 104
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I231_804_237_6110}>
                  <View style={styles.View_I231_804_237_6110_229_16317}>
                    <View style={styles.View_I231_804_237_6110_229_16318}>
                      <View
                        style={styles.View_I231_804_237_6110_229_16318_153_138}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                      }}
                      style={styles.ImageBackground_I231_804_237_6110_229_16319}
                    />
                  </View>
                  <View style={styles.View_I231_804_237_6110_229_16320}>
                    <View style={styles.View_I231_804_237_6110_230_12487}>
                      <View style={styles.View_I231_804_237_6110_229_16323}>
                        <Text style={styles.Text_I231_804_237_6110_229_16323}>
                          400 sq ft
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_6110_229_16322}>
                        <Text style={styles.Text_I231_804_237_6110_229_16322}>
                          12 desks
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_6110_229_16331}>
                        <Text style={styles.Text_I231_804_237_6110_229_16331}>
                          08 windows
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I231_804_237_6110_229_16324}>
                      <Text style={styles.Text_I231_804_237_6110_229_16324}>
                        Nurses office
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I231_804_237_6318}>
                  <View style={styles.View_I231_804_237_6318_229_16317}>
                    <View style={styles.View_I231_804_237_6318_229_16318}>
                      <View
                        style={styles.View_I231_804_237_6318_229_16318_153_138}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                      }}
                      style={styles.ImageBackground_I231_804_237_6318_229_16319}
                    />
                  </View>
                  <View style={styles.View_I231_804_237_6318_229_16320}>
                    <View style={styles.View_I231_804_237_6318_230_12487}>
                      <View style={styles.View_I231_804_237_6318_229_16323}>
                        <Text style={styles.Text_I231_804_237_6318_229_16323}>
                          400 sq ft
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_6318_229_16322}>
                        <Text style={styles.Text_I231_804_237_6318_229_16322}>
                          21 desks
                        </Text>
                      </View>
                      <View style={styles.View_I231_804_237_6318_229_16331}>
                        <Text style={styles.Text_I231_804_237_6318_229_16331}>
                          08 windows
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I231_804_237_6318_229_16324}>
                      <Text style={styles.Text_I231_804_237_6318_229_16324}>
                        Restroom 1
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_231_805}>
              <View style={styles.View_I231_805_229_10074}>
                <View style={styles.View_I231_805_229_9336}>
                  <View style={styles.View_I231_805_229_9336_153_138} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                  }}
                  style={styles.ImageBackground_I231_805_229_4955}
                />
              </View>
              <View style={styles.View_I231_805_229_13447}>
                <View style={styles.View_I231_805_237_0}>
                  <View style={styles.View_I231_805_237_1}>
                    <Text style={styles.Text_I231_805_237_1}>400 sq ft</Text>
                  </View>
                  <View style={styles.View_I231_805_237_2}>
                    <Text style={styles.Text_I231_805_237_2}>21 desks</Text>
                  </View>
                  <View style={styles.View_I231_805_237_3}>
                    <Text style={styles.Text_I231_805_237_3}>08 windows</Text>
                  </View>
                </View>
                <View style={styles.View_I231_805_15_8164}>
                  <Text style={styles.Text_I231_805_15_8164}>Section 2</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/2bc7/3a900a48239ac1f3be7fc3247d940a00"
                  }}
                  style={styles.ImageBackground_I231_805_15_8251}
                />
              </View>
            </View>
            <View style={styles.View_231_806}>
              <View style={styles.View_I231_806_229_10074}>
                <View style={styles.View_I231_806_229_9336}>
                  <View style={styles.View_I231_806_229_9336_153_138} />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/e1b7/50cc57160870b9609c7e7c5def2714d6"
                  }}
                  style={styles.ImageBackground_I231_806_229_4955}
                />
              </View>
              <View style={styles.View_I231_806_229_13447}>
                <View style={styles.View_I231_806_237_0}>
                  <View style={styles.View_I231_806_237_1}>
                    <Text style={styles.Text_I231_806_237_1}>400 sq ft</Text>
                  </View>
                  <View style={styles.View_I231_806_237_2}>
                    <Text style={styles.Text_I231_806_237_2}>21 desks</Text>
                  </View>
                  <View style={styles.View_I231_806_237_3}>
                    <Text style={styles.Text_I231_806_237_3}>08 windows</Text>
                  </View>
                </View>
                <View style={styles.View_I231_806_15_8164}>
                  <Text style={styles.Text_I231_806_15_8164}>Section 3</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/2bc7/3a900a48239ac1f3be7fc3247d940a00"
                  }}
                  style={styles.ImageBackground_I231_806_15_8251}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_231_809}>
            <View style={styles.View_I231_809_153_138} />
          </View>
          <View style={styles.View_231_810}>
            <View style={styles.View_239_0}>
              <Text style={styles.Text_239_0}>Budgeting</Text>
            </View>
            <View style={styles.View_241_4}>
              <View style={styles.View_241_624}>
                <View style={styles.View_I241_624_229_16080}>
                  <View style={styles.View_I241_624_229_16080_229_10074}>
                    <View style={styles.View_I241_624_229_16080_229_9336}>
                      <View
                        style={styles.View_I241_624_229_16080_229_9336_153_138}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                      }}
                      style={styles.ImageBackground_I241_624_229_16080_229_4955}
                    />
                  </View>
                  <View style={styles.View_I241_624_229_16080_229_13447}>
                    <View style={styles.View_I241_624_229_16080_237_0}>
                      <View style={styles.View_I241_624_229_16080_237_1}>
                        <Text style={styles.Text_I241_624_229_16080_237_1}>
                          14756 sq ft
                        </Text>
                      </View>
                      <View style={styles.View_I241_624_229_16080_237_2}>
                        <Text style={styles.Text_I241_624_229_16080_237_2}>
                          6 hrs cleaning time
                        </Text>
                      </View>
                      <View style={styles.View_I241_624_229_16080_237_3}>
                        <Text style={styles.Text_I241_624_229_16080_237_3}>
                          04 cleaners
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I241_624_229_16080_15_8164}>
                      <Text style={styles.Text_I241_624_229_16080_15_8164}>
                        Section 1
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2924/69e6/92cd53dfb73fb68767e7e72f5458bcef"
                      }}
                      style={styles.ImageBackground_I241_624_229_16080_15_8251}
                    />
                  </View>
                </View>
                <View style={styles.View_I241_624_229_16256}>
                  <View style={styles.View_I241_624_229_16256_0_230} />
                </View>
                <View style={styles.View_I241_624_237_5886}>
                  <View style={styles.View_I241_624_229_16372}>
                    <View style={styles.View_I241_624_229_16372_229_16317}>
                      <View style={styles.View_I241_624_229_16372_229_16318}>
                        <View
                          style={
                            styles.View_I241_624_229_16372_229_16318_153_138
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                        }}
                        style={
                          styles.ImageBackground_I241_624_229_16372_229_16319
                        }
                      />
                    </View>
                    <View style={styles.View_I241_624_229_16372_229_16320}>
                      <View style={styles.View_I241_624_229_16372_230_12487}>
                        <View style={styles.View_I241_624_229_16372_229_16323}>
                          <Text
                            style={styles.Text_I241_624_229_16372_229_16323}
                          >
                            400 sq ft
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_229_16372_229_16322}>
                          <Text
                            style={styles.Text_I241_624_229_16372_229_16322}
                          >
                            1 hr cleaning time
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_229_16372_229_16331}>
                          <Text
                            style={styles.Text_I241_624_229_16372_229_16331}
                          >
                            01 cleaner
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I241_624_229_16372_229_16324}>
                        <Text style={styles.Text_I241_624_229_16372_229_16324}>
                          Room 103
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I241_624_237_5967}>
                    <View style={styles.View_I241_624_237_5967_229_16317}>
                      <View style={styles.View_I241_624_237_5967_229_16318}>
                        <View
                          style={
                            styles.View_I241_624_237_5967_229_16318_153_138
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                        }}
                        style={
                          styles.ImageBackground_I241_624_237_5967_229_16319
                        }
                      />
                    </View>
                    <View style={styles.View_I241_624_237_5967_229_16320}>
                      <View style={styles.View_I241_624_237_5967_230_12487}>
                        <View style={styles.View_I241_624_237_5967_229_16323}>
                          <Text style={styles.Text_I241_624_237_5967_229_16323}>
                            500 sq ft
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_5967_229_16322}>
                          <Text style={styles.Text_I241_624_237_5967_229_16322}>
                            1 hr cleaning time
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_5967_229_16331}>
                          <Text style={styles.Text_I241_624_237_5967_229_16331}>
                            01 cleaner
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I241_624_237_5967_229_16324}>
                        <Text style={styles.Text_I241_624_237_5967_229_16324}>
                          Room 104
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I241_624_237_6110}>
                    <View style={styles.View_I241_624_237_6110_229_16317}>
                      <View style={styles.View_I241_624_237_6110_229_16318}>
                        <View
                          style={
                            styles.View_I241_624_237_6110_229_16318_153_138
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                        }}
                        style={
                          styles.ImageBackground_I241_624_237_6110_229_16319
                        }
                      />
                    </View>
                    <View style={styles.View_I241_624_237_6110_229_16320}>
                      <View style={styles.View_I241_624_237_6110_230_12487}>
                        <View style={styles.View_I241_624_237_6110_229_16323}>
                          <Text style={styles.Text_I241_624_237_6110_229_16323}>
                            400 sq ft
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_6110_229_16322}>
                          <Text style={styles.Text_I241_624_237_6110_229_16322}>
                            2 hr cleaning time
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_6110_229_16331}>
                          <Text style={styles.Text_I241_624_237_6110_229_16331}>
                            01 cleaners
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I241_624_237_6110_229_16324}>
                        <Text style={styles.Text_I241_624_237_6110_229_16324}>
                          Nurses office
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I241_624_237_6318}>
                    <View style={styles.View_I241_624_237_6318_229_16317}>
                      <View style={styles.View_I241_624_237_6318_229_16318}>
                        <View
                          style={
                            styles.View_I241_624_237_6318_229_16318_153_138
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                        }}
                        style={
                          styles.ImageBackground_I241_624_237_6318_229_16319
                        }
                      />
                    </View>
                    <View style={styles.View_I241_624_237_6318_229_16320}>
                      <View style={styles.View_I241_624_237_6318_230_12487}>
                        <View style={styles.View_I241_624_237_6318_229_16323}>
                          <Text style={styles.Text_I241_624_237_6318_229_16323}>
                            400 sq ft
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_6318_229_16322}>
                          <Text style={styles.Text_I241_624_237_6318_229_16322}>
                            2 hr cleaning time
                          </Text>
                        </View>
                        <View style={styles.View_I241_624_237_6318_229_16331}>
                          <Text style={styles.Text_I241_624_237_6318_229_16331}>
                            01 cleaners
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I241_624_237_6318_229_16324}>
                        <Text style={styles.Text_I241_624_237_6318_229_16324}>
                          Restroom 1
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_241_704}>
                <View style={styles.View_I241_704_229_10074}>
                  <View style={styles.View_I241_704_229_9336}>
                    <View style={styles.View_I241_704_229_9336_153_138} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                    }}
                    style={styles.ImageBackground_I241_704_229_4955}
                  />
                </View>
                <View style={styles.View_I241_704_229_13447}>
                  <View style={styles.View_I241_704_237_0}>
                    <View style={styles.View_I241_704_237_1}>
                      <Text style={styles.Text_I241_704_237_1}>400 sq ft</Text>
                    </View>
                    <View style={styles.View_I241_704_237_2}>
                      <Text style={styles.Text_I241_704_237_2}>
                        8 hrs cleaning time
                      </Text>
                    </View>
                    <View style={styles.View_I241_704_237_3}>
                      <Text style={styles.Text_I241_704_237_3}>
                        03 cleaners
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I241_704_15_8164}>
                    <Text style={styles.Text_I241_704_15_8164}>Section 2</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/2bc7/3a900a48239ac1f3be7fc3247d940a00"
                    }}
                    style={styles.ImageBackground_I241_704_15_8251}
                  />
                </View>
              </View>
              <View style={styles.View_241_705}>
                <View style={styles.View_I241_705_229_10074}>
                  <View style={styles.View_I241_705_229_9336}>
                    <View style={styles.View_I241_705_229_9336_153_138} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/3c72/ac06db508dff5872f6c302ee45187ec1"
                    }}
                    style={styles.ImageBackground_I241_705_229_4955}
                  />
                </View>
                <View style={styles.View_I241_705_229_13447}>
                  <View style={styles.View_I241_705_237_0}>
                    <View style={styles.View_I241_705_237_1}>
                      <Text style={styles.Text_I241_705_237_1}>400 sq ft</Text>
                    </View>
                    <View style={styles.View_I241_705_237_2}>
                      <Text style={styles.Text_I241_705_237_2}>21 desks</Text>
                    </View>
                    <View style={styles.View_I241_705_237_3}>
                      <Text style={styles.Text_I241_705_237_3}>08 windows</Text>
                    </View>
                  </View>
                  <View style={styles.View_I241_705_15_8164}>
                    <Text style={styles.Text_I241_705_15_8164}>Section 3</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f655/2bc7/3a900a48239ac1f3be7fc3247d940a00"
                    }}
                    style={styles.ImageBackground_I241_705_15_8251}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_246_1236}>
              <View style={styles.View_I246_1236_244_281}>
                <View style={styles.View_I246_1236_244_283}>
                  <Text style={styles.Text_I246_1236_244_283}>$35000</Text>
                </View>
                <View style={styles.View_I246_1236_244_284}>
                  <Text style={styles.Text_I246_1236_244_284}>Total Cost</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71e3/0a98/e4900c3fc493ae4efb9a98340b156408"
                  }}
                  style={styles.ImageBackground_I246_1236_244_282}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_231_811}>
          <View style={styles.View_I231_811_196_1177}>
            <View style={styles.View_I231_811_196_1177_153_6159}>
              <View style={styles.View_I231_811_196_1177_0_890}>
                <Text style={styles.Text_I231_811_196_1177_0_890}>
                  overview
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_811_196_1177_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6134}>
            <View style={styles.View_I231_811_153_6134_153_6159}>
              <View style={styles.View_I231_811_153_6134_0_890}>
                <Text style={styles.Text_I231_811_153_6134_0_890}>reports</Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6134_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6135}>
            <View style={styles.View_I231_811_153_6135_153_6159}>
              <View style={styles.View_I231_811_153_6135_0_890}>
                <Text style={styles.Text_I231_811_153_6135_0_890}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6135_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6136}>
            <View style={styles.View_I231_811_153_6136_153_6159}>
              <View style={styles.View_I231_811_153_6136_0_890}>
                <Text style={styles.Text_I231_811_153_6136_0_890}>People</Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6136_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6144}>
            <View style={styles.View_I231_811_153_6144_153_6263}>
              <View style={styles.View_I231_811_153_6144_0_897}>
                <Text style={styles.Text_I231_811_153_6144_0_897}>
                  BudgetING
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6144_0_896}>
              <View style={styles.View_I231_811_153_6144_0_896_0_342} />
            </View>
          </View>
          <View style={styles.View_I231_811_153_6147}>
            <View style={styles.View_I231_811_153_6147_153_6159}>
              <View style={styles.View_I231_811_153_6147_0_890}>
                <Text style={styles.Text_I231_811_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6147_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6150}>
            <View style={styles.View_I231_811_153_6150_153_6159}>
              <View style={styles.View_I231_811_153_6150_0_890}>
                <Text style={styles.Text_I231_811_153_6150_0_890}>savings</Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6150_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6153}>
            <View style={styles.View_I231_811_153_6153_153_6159}>
              <View style={styles.View_I231_811_153_6153_0_890}>
                <Text style={styles.Text_I231_811_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6153_0_892} />
          </View>
          <View style={styles.View_I231_811_153_6156}>
            <View style={styles.View_I231_811_153_6156_153_6159}>
              <View style={styles.View_I231_811_153_6156_0_890}>
                <Text style={styles.Text_I231_811_153_6156_0_890}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I231_811_153_6156_0_892} />
          </View>
        </View>
        <View style={styles.View_231_812}>
          <View style={styles.View_I231_812_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
              }}
              style={styles.ImageBackground_I231_812_153_6113}
            />
            <View style={styles.View_I231_812_153_6114} />
          </View>
          <View style={styles.View_I231_812_153_6116}>
            <View style={styles.View_I231_812_153_6117}>
              <Text style={styles.Text_I231_812_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I231_812_153_6118}
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
  View_231_792: {
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
  View_231_793: {
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
  View_231_794: {
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
  View_I231_794_153_5917: {
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
  View_I231_794_153_5898: {
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
  ImageBackground_I231_794_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_794_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_794_153_5902: {
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
  View_I231_794_153_5903: {
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
  View_I231_794_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_794_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_794_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_794_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_794_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_794_153_5907: {
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
  View_I231_794_153_5908: {
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
  ImageBackground_I231_794_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_794_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_794_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_794_153_5909: {
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
  View_I231_794_153_5909_0_230: {
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
  View_231_795: {
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
  View_I231_795_153_5917: {
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
  View_I231_795_153_5898: {
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
  ImageBackground_I231_795_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_795_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_795_153_5902: {
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
  View_I231_795_153_5903: {
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
  View_I231_795_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_795_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_795_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_795_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_795_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_795_153_5907: {
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
  View_I231_795_153_5908: {
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
  ImageBackground_I231_795_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_795_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_795_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_795_153_5909: {
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
  View_I231_795_153_5909_0_230: {
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
  View_231_796: {
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
  View_I231_796_153_5917: {
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
  View_I231_796_153_5898: {
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
  ImageBackground_I231_796_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_796_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_796_153_5902: {
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
  View_I231_796_153_5903: {
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
  View_I231_796_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_796_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_796_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_796_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_796_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_796_153_5907: {
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
  View_I231_796_153_5908: {
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
  ImageBackground_I231_796_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_796_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_796_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_796_153_5909: {
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
  View_I231_796_153_5909_0_230: {
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
  View_231_797: {
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
  View_I231_797_153_5917: {
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
  View_I231_797_153_5898: {
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
  ImageBackground_I231_797_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_797_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_797_153_5902: {
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
  View_I231_797_153_5903: {
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
  View_I231_797_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_797_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_797_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I231_797_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I231_797_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I231_797_153_5907: {
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
  View_I231_797_153_5908: {
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
  ImageBackground_I231_797_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I231_797_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I231_797_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_797_153_5909: {
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
  View_I231_797_153_5909_0_230: {
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
  View_231_798: {
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
  View_I231_798_153_130: {
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
  View_I231_798_153_130_0_230: {
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
  View_I231_798_189_362: {
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
  ImageBackground_I231_798_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I231_798_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I231_798_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_798_186_25: {
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
  View_I231_798_189_292: {
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
  ImageBackground_I231_798_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_798_153_136: {
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
  View_I231_798_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_798_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I231_798_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I231_798_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I231_798_139_759: {
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
  View_I231_798_139_761: {
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
  View_I231_798_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I231_798_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I231_798_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I231_798_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I231_798_229_3960: {
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
  ImageBackground_I231_798_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_798_229_1982: {
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
  View_I231_798_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I231_798_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I231_798_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I231_798_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I231_798_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_231_799: {
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
  View_I231_799_153_138: {
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
  View_231_800: {
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
  View_231_801: {
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
  View_231_802: {
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
  View_231_803: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 24
  },
  Text_231_803: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_231_804: {
    width: wp("25.972222222222225%"),
    height: 521,
    minHeight: 521,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 64,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_804_229_16080: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16080_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_229_16080_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16080_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_804_229_16080_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%")
  },
  View_I231_804_229_16080_229_13447: {
    flexGrow: 1,
    width: wp("22.63888888888889%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_229_16080_237_0: {
    width: wp("19.930555555555557%"),
    minWidth: wp("19.930555555555557%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16080_237_1: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_804_229_16080_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16080_237_2: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569444444444443%"),
    top: 0
  },
  Text_I231_804_229_16080_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16080_237_3: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777779%"),
    top: 0
  },
  Text_I231_804_229_16080_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16080_15_8164: {
    flexGrow: 1,
    width: wp("18.194444444444443%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I231_804_229_16080_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_804_229_16080_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.861111111111107%")
  },
  View_I231_804_229_16256: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 88,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16256_0_230: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I231_804_237_5886: {
    flexGrow: 1,
    width: wp("25.972222222222225%"),
    height: 432,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16372: {
    width: wp("23.75%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_804_229_16372_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_229_16372_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16372_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_804_229_16372_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333393%")
  },
  View_I231_804_229_16372_229_16320: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_229_16372_230_12487: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_229_16372_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_804_229_16372_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16372_229_16322: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I231_804_229_16372_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16372_229_16331: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111107%"),
    top: 0
  },
  Text_I231_804_229_16372_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_229_16372_229_16324: {
    flexGrow: 1,
    width: wp("15.972222222222221%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I231_804_229_16372_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I231_804_237_5967: {
    width: wp("23.75%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 120,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_804_237_5967_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_5967_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_5967_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_804_237_5967_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333393%")
  },
  View_I231_804_237_5967_229_16320: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_5967_230_12487: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_5967_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_804_237_5967_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_5967_229_16322: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I231_804_237_5967_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_5967_229_16331: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111107%"),
    top: 0
  },
  Text_I231_804_237_5967_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_5967_229_16324: {
    flexGrow: 1,
    width: wp("15.972222222222221%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I231_804_237_5967_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I231_804_237_6110: {
    width: wp("23.75%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 224,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_804_237_6110_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_6110_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_6110_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_804_237_6110_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333393%")
  },
  View_I231_804_237_6110_229_16320: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_6110_230_12487: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_6110_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_804_237_6110_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6110_229_16322: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I231_804_237_6110_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6110_229_16331: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111107%"),
    top: 0
  },
  Text_I231_804_237_6110_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6110_229_16324: {
    flexGrow: 1,
    width: wp("15.972222222222221%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I231_804_237_6110_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I231_804_237_6318: {
    width: wp("23.75%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 328,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_804_237_6318_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_6318_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_6318_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_804_237_6318_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333393%")
  },
  View_I231_804_237_6318_229_16320: {
    flexGrow: 1,
    width: wp("20.416666666666668%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_804_237_6318_230_12487: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_804_237_6318_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_804_237_6318_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6318_229_16322: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I231_804_237_6318_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6318_229_16331: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111107%"),
    top: 0
  },
  Text_I231_804_237_6318_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_804_237_6318_229_16324: {
    flexGrow: 1,
    width: wp("15.972222222222221%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I231_804_237_6318_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_231_805: {
    width: wp("25.972222222222225%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 601,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_805_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_805_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_805_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_805_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%")
  },
  View_I231_805_229_13447: {
    flexGrow: 1,
    width: wp("22.63888888888889%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_805_237_0: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_805_237_1: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_805_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_805_237_2: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333336%"),
    top: 0
  },
  Text_I231_805_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_805_237_3: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111114%"),
    top: 0
  },
  Text_I231_805_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_805_15_8164: {
    flexGrow: 1,
    width: wp("18.194444444444443%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I231_805_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_805_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.861111111111107%")
  },
  View_231_806: {
    width: wp("25.972222222222225%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 705,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_806_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_806_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263888888888893%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_806_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I231_806_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%")
  },
  View_I231_806_229_13447: {
    flexGrow: 1,
    width: wp("22.63888888888889%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I231_806_237_0: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I231_806_237_1: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_806_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_806_237_2: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333336%"),
    top: 0
  },
  Text_I231_806_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_806_237_3: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111114%"),
    top: 0
  },
  Text_I231_806_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I231_806_15_8164: {
    flexGrow: 1,
    width: wp("18.194444444444443%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16
  },
  Text_I231_806_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I231_806_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.861111111111107%")
  },
  View_231_809: {
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
  View_I231_809_153_138: {
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
  View_231_810: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: 796,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888888%"),
    top: 0,
    backgroundColor: "rgba(242, 246, 246, 1)",
    overflow: "hidden"
  },
  View_239_0: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 24
  },
  Text_239_0: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_241_4: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 729,
    minHeight: 729,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 64,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_241_624: {
    width: wp("40.27777777777778%"),
    height: 521,
    minHeight: 521,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_624_229_16080: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16080_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_229_16080_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16080_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_624_229_16080_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_624_229_16080_229_13447: {
    flexGrow: 1,
    width: wp("36.94444444444444%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_229_16080_237_0: {
    width: wp("23.680555555555554%"),
    minWidth: wp("23.680555555555554%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16080_237_1: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_624_229_16080_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16080_237_2: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569444444444443%"),
    top: 0
  },
  Text_I241_624_229_16080_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16080_237_3: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666657%"),
    top: 0
  },
  Text_I241_624_229_16080_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16080_15_8164: {
    flexGrow: 1,
    width: wp("32.5%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_624_229_16080_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I241_624_229_16080_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16666666666667%")
  },
  View_I241_624_229_16256: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 88,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16256_0_230: {
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
  View_I241_624_237_5886: {
    flexGrow: 1,
    width: wp("40.27777777777778%"),
    height: 432,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16372: {
    width: wp("38.05555555555556%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_624_229_16372_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_229_16372_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16372_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_624_229_16372_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_624_229_16372_229_16320: {
    flexGrow: 1,
    width: wp("34.72222222222222%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_229_16372_230_12487: {
    width: wp("21.52777777777778%"),
    minWidth: wp("21.52777777777778%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_229_16372_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_624_229_16372_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16372_229_16322: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_624_229_16372_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16372_229_16331: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 0
  },
  Text_I241_624_229_16372_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_229_16372_229_16324: {
    flexGrow: 1,
    width: wp("30.277777777777775%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_624_229_16372_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I241_624_237_5967: {
    width: wp("38.05555555555556%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 120,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_624_237_5967_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_5967_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_5967_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_624_237_5967_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_624_237_5967_229_16320: {
    flexGrow: 1,
    width: wp("34.72222222222222%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_5967_230_12487: {
    width: wp("21.52777777777778%"),
    minWidth: wp("21.52777777777778%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_5967_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_624_237_5967_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_5967_229_16322: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_624_237_5967_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_5967_229_16331: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 0
  },
  Text_I241_624_237_5967_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_5967_229_16324: {
    flexGrow: 1,
    width: wp("30.277777777777775%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_624_237_5967_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I241_624_237_6110: {
    width: wp("38.05555555555556%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 224,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_624_237_6110_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_6110_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_6110_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_624_237_6110_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_624_237_6110_229_16320: {
    flexGrow: 1,
    width: wp("34.72222222222222%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_6110_230_12487: {
    width: wp("22.01388888888889%"),
    minWidth: wp("22.01388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_6110_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_624_237_6110_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6110_229_16322: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_624_237_6110_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6110_229_16331: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 0
  },
  Text_I241_624_237_6110_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6110_229_16324: {
    flexGrow: 1,
    width: wp("30.277777777777775%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_624_237_6110_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I241_624_237_6318: {
    width: wp("38.05555555555556%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 328,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_624_237_6318_229_16317: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_6318_229_16318: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_6318_229_16318_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_624_237_6318_229_16319: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_624_237_6318_229_16320: {
    flexGrow: 1,
    width: wp("34.72222222222222%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_624_237_6318_230_12487: {
    width: wp("22.01388888888889%"),
    minWidth: wp("22.01388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_624_237_6318_229_16323: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_624_237_6318_229_16323: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6318_229_16322: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_624_237_6318_229_16322: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6318_229_16331: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.875%"),
    top: 0
  },
  Text_I241_624_237_6318_229_16331: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_624_237_6318_229_16324: {
    flexGrow: 1,
    width: wp("30.277777777777775%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_624_237_6318_229_16324: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_241_704: {
    width: wp("40.27777777777778%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 537,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_704_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_704_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_704_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_704_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_704_229_13447: {
    flexGrow: 1,
    width: wp("36.94444444444444%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_704_237_0: {
    width: wp("22.569444444444446%"),
    minWidth: wp("22.569444444444446%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_704_237_1: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_704_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_704_237_2: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_704_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_704_237_3: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555557%"),
    top: 0
  },
  Text_I241_704_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_704_15_8164: {
    flexGrow: 1,
    width: wp("32.5%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_704_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I241_704_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16666666666667%")
  },
  View_241_705: {
    width: wp("40.27777777777778%"),
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 641,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I241_705_229_10074: {
    flexGrow: 1,
    width: wp("3.3333333333333335%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_705_229_9336: {
    width: wp("0.034722222222222224%"),
    minWidth: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_705_229_9336_153_138: {
    flexGrow: 1,
    width: wp("0.034722222222222224%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  ImageBackground_I241_705_229_4955: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%")
  },
  View_I241_705_229_13447: {
    flexGrow: 1,
    width: wp("36.94444444444444%"),
    height: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I241_705_237_0: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_705_237_1: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I241_705_237_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_705_237_2: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    top: 0
  },
  Text_I241_705_237_2: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_705_237_3: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.9861111111111%"),
    top: 0
  },
  Text_I241_705_237_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I241_705_15_8164: {
    flexGrow: 1,
    width: wp("32.5%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 16
  },
  Text_I241_705_15_8164: {
    color: "rgba(28, 79, 81, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I241_705_15_8251: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16666666666667%")
  },
  View_246_1236: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 736,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I246_1236_244_281: {
    flexGrow: 1,
    width: wp("42.5%"),
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(19, 97, 98, 1)",
    overflow: "hidden"
  },
  View_I246_1236_244_283: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: 14
  },
  Text_I246_1236_244_283: {
    color: "rgba(251, 145, 25, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I246_1236_244_284: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: 18
  },
  Text_I246_1236_244_284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I246_1236_244_282: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.72222222222222%")
  },
  View_231_811: {
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
  View_I231_811_196_1177: {
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
  View_I231_811_196_1177_153_6159: {
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
  View_I231_811_196_1177_0_890: {
    flexGrow: 1,
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_811_196_1177_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_196_1177_0_892: {
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
  View_I231_811_153_6134: {
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
  View_I231_811_153_6134_153_6159: {
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
  View_I231_811_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_811_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6134_0_892: {
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
  View_I231_811_153_6135: {
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
  View_I231_811_153_6135_153_6159: {
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
  View_I231_811_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_811_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6135_0_892: {
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
  View_I231_811_153_6136: {
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
  View_I231_811_153_6136_153_6159: {
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
  View_I231_811_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_811_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6136_0_892: {
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
  View_I231_811_153_6144: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.20833333333333%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I231_811_153_6144_153_6263: {
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
  View_I231_811_153_6144_0_897: {
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I231_811_153_6144_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6144_0_896: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I231_811_153_6144_0_896_0_342: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
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
  View_I231_811_153_6147: {
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
  View_I231_811_153_6147_153_6159: {
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
  View_I231_811_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I231_811_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6147_0_892: {
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
  View_I231_811_153_6150: {
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
  View_I231_811_153_6150_153_6159: {
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
  View_I231_811_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_811_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6150_0_892: {
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
  View_I231_811_153_6153: {
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
  View_I231_811_153_6153_153_6159: {
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
  View_I231_811_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I231_811_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6153_0_892: {
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
  View_I231_811_153_6156: {
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
  View_I231_811_153_6156_153_6159: {
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
  View_I231_811_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I231_811_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I231_811_153_6156_0_892: {
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
  View_231_812: {
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
  View_I231_812_153_6108: {
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
  ImageBackground_I231_812_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I231_812_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I231_812_153_6116: {
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
  View_I231_812_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I231_812_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I231_812_153_6118: {
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
