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
      <View style={styles.View_172_491}>
        <View style={styles.View_172_492}>
          <View style={styles.View_172_493}>
            <View style={styles.View_I172_493_153_5917}>
              <View style={styles.View_I172_493_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I172_493_153_5900}
                />
                <View style={styles.View_I172_493_153_5941} />
              </View>
              <View style={styles.View_I172_493_153_5902}>
                <View style={styles.View_I172_493_153_5903}>
                  <View style={styles.View_I172_493_153_5904}>
                    <Text style={styles.Text_I172_493_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I172_493_153_5905}
                  />
                </View>
                <View style={styles.View_I172_493_153_5906}>
                  <Text style={styles.Text_I172_493_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I172_493_153_5907}>
              <View style={styles.View_I172_493_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I172_493_153_5908_138_29}
                />
                <View style={styles.View_I172_493_153_5908_0_2104}>
                  <Text style={styles.Text_I172_493_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I172_493_153_5909}>
                <View style={styles.View_I172_493_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_172_494}>
            <View style={styles.View_I172_494_153_5917}>
              <View style={styles.View_I172_494_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I172_494_153_6015}
                />
                <View style={styles.View_I172_494_153_5941} />
              </View>
              <View style={styles.View_I172_494_153_5902}>
                <View style={styles.View_I172_494_153_5903}>
                  <View style={styles.View_I172_494_153_5904}>
                    <Text style={styles.Text_I172_494_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I172_494_153_5905}
                  />
                </View>
                <View style={styles.View_I172_494_153_5906}>
                  <Text style={styles.Text_I172_494_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I172_494_153_5907}>
              <View style={styles.View_I172_494_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I172_494_153_5908_138_29}
                />
                <View style={styles.View_I172_494_153_5908_0_2104}>
                  <Text style={styles.Text_I172_494_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I172_494_153_5909}>
                <View style={styles.View_I172_494_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_172_495}>
            <View style={styles.View_I172_495_153_5917}>
              <View style={styles.View_I172_495_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I172_495_153_6014}
                />
                <View style={styles.View_I172_495_153_5941} />
              </View>
              <View style={styles.View_I172_495_153_5902}>
                <View style={styles.View_I172_495_153_5903}>
                  <View style={styles.View_I172_495_153_5904}>
                    <Text style={styles.Text_I172_495_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I172_495_153_5905}
                  />
                </View>
                <View style={styles.View_I172_495_153_5906}>
                  <Text style={styles.Text_I172_495_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I172_495_153_5907}>
              <View style={styles.View_I172_495_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I172_495_153_5908_138_29}
                />
                <View style={styles.View_I172_495_153_5908_0_2104}>
                  <Text style={styles.Text_I172_495_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I172_495_153_5909}>
                <View style={styles.View_I172_495_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_172_496}>
            <View style={styles.View_I172_496_153_5917}>
              <View style={styles.View_I172_496_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I172_496_153_5899}
                />
                <View style={styles.View_I172_496_153_5941} />
              </View>
              <View style={styles.View_I172_496_153_5902}>
                <View style={styles.View_I172_496_153_5903}>
                  <View style={styles.View_I172_496_153_5904}>
                    <Text style={styles.Text_I172_496_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I172_496_153_5905}
                  />
                </View>
                <View style={styles.View_I172_496_153_5906}>
                  <Text style={styles.Text_I172_496_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I172_496_153_5907}>
              <View style={styles.View_I172_496_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I172_496_153_5908_138_29}
                />
                <View style={styles.View_I172_496_153_5908_0_2104}>
                  <Text style={styles.Text_I172_496_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I172_496_153_5909}>
                <View style={styles.View_I172_496_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_190_220}>
          <View style={styles.View_I190_220_153_130}>
            <View style={styles.View_I190_220_153_130_0_230} />
          </View>
          <View style={styles.View_I190_220_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I190_220_189_362_138_29}
            />
            <View style={styles.View_I190_220_189_362_0_2104}>
              <Text style={styles.Text_I190_220_189_362_0_2104}>Building</Text>
            </View>
          </View>
          <View style={styles.View_I190_220_186_25}>
            <View style={styles.View_I190_220_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                }}
                style={styles.ImageBackground_I190_220_153_132}
              />
            </View>
            <View style={styles.View_I190_220_153_136}>
              <View style={styles.View_I190_220_153_14}>
                <Text style={styles.Text_I190_220_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I190_220_153_1}>
                <Text style={styles.Text_I190_220_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I190_220_139_759}>
            <View style={styles.View_I190_220_139_761} />
            <View style={styles.View_I190_220_139_760}>
              <Text style={styles.Text_I190_220_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I190_220_189_305}>
              <Text style={styles.Text_I190_220_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I190_220_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I190_220_229_2631}
            />
            <View style={styles.View_I190_220_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I190_220_229_1982_229_1973}
              />
              <View style={styles.View_I190_220_229_1982_229_1975}>
                <View style={styles.View_I190_220_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I190_220_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I190_220_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_173_542}>
        <View style={styles.View_I173_542_153_138} />
      </View>
      <View style={styles.View_172_506}>
        <View style={styles.View_172_528}>
          <View style={styles.View_203_539}>
            <View style={styles.View_203_540}>
              <View style={styles.View_I203_540_0_230} />
            </View>
            <View style={styles.View_203_237}>
              <View style={styles.View_197_244}>
                <View style={styles.View_197_230}>
                  <View style={styles.View_I197_230_197_92}>
                    <Text style={styles.Text_I197_230_197_92}>PRODUCTS</Text>
                  </View>
                </View>
                <View style={styles.View_197_245}>
                  <View style={styles.View_I197_245_197_92}>
                    <Text style={styles.Text_I197_245_197_92}>
                      Paper towels
                    </Text>
                  </View>
                  <View style={styles.View_I197_245_197_93}>
                    <View style={styles.View_I197_245_197_93_0_230} />
                  </View>
                  <View style={styles.View_I197_245_197_94}>
                    <View style={styles.View_I197_245_197_94_153_138} />
                  </View>
                  <View style={styles.View_I197_245_197_95}>
                    <View style={styles.View_I197_245_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_197_253}>
                  <View style={styles.View_I197_253_197_92}>
                    <Text style={styles.Text_I197_253_197_92}>
                      Toiler tissue
                    </Text>
                  </View>
                  <View style={styles.View_I197_253_197_93}>
                    <View style={styles.View_I197_253_197_93_0_230} />
                  </View>
                  <View style={styles.View_I197_253_197_94}>
                    <View style={styles.View_I197_253_197_94_153_138} />
                  </View>
                  <View style={styles.View_I197_253_197_95}>
                    <View style={styles.View_I197_253_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_197_261}>
                  <View style={styles.View_I197_261_197_92}>
                    <Text style={styles.Text_I197_261_197_92}>Hand soap</Text>
                  </View>
                  <View style={styles.View_I197_261_197_93}>
                    <View style={styles.View_I197_261_197_93_0_230} />
                  </View>
                  <View style={styles.View_I197_261_197_94}>
                    <View style={styles.View_I197_261_197_94_153_138} />
                  </View>
                  <View style={styles.View_I197_261_197_95}>
                    <View style={styles.View_I197_261_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_197_269}>
                  <View style={styles.View_I197_269_197_92}>
                    <Text style={styles.Text_I197_269_197_92}>
                      Hand Sanitizer
                    </Text>
                  </View>
                  <View style={styles.View_I197_269_197_93}>
                    <View style={styles.View_I197_269_197_93_0_230} />
                  </View>
                  <View style={styles.View_I197_269_197_94}>
                    <View style={styles.View_I197_269_197_94_153_138} />
                  </View>
                  <View style={styles.View_I197_269_197_95}>
                    <View style={styles.View_I197_269_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_197_277}>
                  <View style={styles.View_I197_277_197_92}>
                    <Text style={styles.Text_I197_277_197_92}>
                      Disinfectant
                    </Text>
                  </View>
                  <View style={styles.View_I197_277_197_93}>
                    <View style={styles.View_I197_277_197_93_0_230} />
                  </View>
                  <View style={styles.View_I197_277_197_94}>
                    <View style={styles.View_I197_277_197_94_153_138} />
                  </View>
                  <View style={styles.View_I197_277_197_95}>
                    <View style={styles.View_I197_277_197_95_153_138} />
                  </View>
                </View>
              </View>
              <View style={styles.View_203_236}>
                <View style={styles.View_203_238}>
                  <View style={styles.View_197_84}>
                    <View style={styles.View_I197_84_197_14}>
                      <Text style={styles.Text_I197_84_197_14}>Room 1A</Text>
                    </View>
                    <View style={styles.View_I197_84_197_18}>
                      <View style={styles.View_I197_84_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_84_197_299}>
                      <View style={styles.View_I197_84_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_84_197_21}>
                      <View style={styles.View_I197_84_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_41}>
                    <View style={styles.View_I203_41_197_14}>
                      <Text style={styles.Text_I203_41_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_41_197_18}>
                      <View style={styles.View_I203_41_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_41_197_21}>
                      <View style={styles.View_I203_41_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_43}>
                    <View style={styles.View_I203_43_197_14}>
                      <Text style={styles.Text_I203_43_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_43_197_18}>
                      <View style={styles.View_I203_43_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_43_197_21}>
                      <View style={styles.View_I203_43_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_44}>
                    <View style={styles.View_I203_44_197_14}>
                      <Text style={styles.Text_I203_44_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_44_197_18}>
                      <View style={styles.View_I203_44_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_44_197_21}>
                      <View style={styles.View_I203_44_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_45}>
                    <View style={styles.View_I203_45_197_14}>
                      <Text style={styles.Text_I203_45_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_45_197_18}>
                      <View style={styles.View_I203_45_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_45_197_21}>
                      <View style={styles.View_I203_45_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_46}>
                    <View style={styles.View_I203_46_197_14}>
                      <Text style={styles.Text_I203_46_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_46_197_18}>
                      <View style={styles.View_I203_46_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_46_197_21}>
                      <View style={styles.View_I203_46_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_239}>
                  <View style={styles.View_197_25}>
                    <View style={styles.View_I197_25_197_14}>
                      <Text style={styles.Text_I197_25_197_14}>Room 1B</Text>
                    </View>
                    <View style={styles.View_I197_25_197_18}>
                      <View style={styles.View_I197_25_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_25_197_299}>
                      <View style={styles.View_I197_25_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_25_197_21}>
                      <View style={styles.View_I197_25_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_241}>
                    <View style={styles.View_I203_241_197_14}>
                      <Text style={styles.Text_I203_241_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_241_197_18}>
                      <View style={styles.View_I203_241_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_241_197_21}>
                      <View style={styles.View_I203_241_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_242}>
                    <View style={styles.View_I203_242_197_14}>
                      <Text style={styles.Text_I203_242_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_242_197_18}>
                      <View style={styles.View_I203_242_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_242_197_21}>
                      <View style={styles.View_I203_242_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_243}>
                    <View style={styles.View_I203_243_197_14}>
                      <Text style={styles.Text_I203_243_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_243_197_18}>
                      <View style={styles.View_I203_243_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_243_197_21}>
                      <View style={styles.View_I203_243_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_244}>
                    <View style={styles.View_I203_244_197_14}>
                      <Text style={styles.Text_I203_244_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_244_197_18}>
                      <View style={styles.View_I203_244_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_244_197_21}>
                      <View style={styles.View_I203_244_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_245}>
                    <View style={styles.View_I203_245_197_14}>
                      <Text style={styles.Text_I203_245_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_245_197_18}>
                      <View style={styles.View_I203_245_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_245_197_21}>
                      <View style={styles.View_I203_245_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_289}>
                  <View style={styles.View_197_31}>
                    <View style={styles.View_I197_31_197_14}>
                      <Text style={styles.Text_I197_31_197_14}>Room 1C</Text>
                    </View>
                    <View style={styles.View_I197_31_197_18}>
                      <View style={styles.View_I197_31_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_31_197_299}>
                      <View style={styles.View_I197_31_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_31_197_21}>
                      <View style={styles.View_I197_31_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_291}>
                    <View style={styles.View_I203_291_197_14}>
                      <Text style={styles.Text_I203_291_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_291_197_18}>
                      <View style={styles.View_I203_291_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_291_197_21}>
                      <View style={styles.View_I203_291_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_292}>
                    <View style={styles.View_I203_292_197_14}>
                      <Text style={styles.Text_I203_292_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_292_197_18}>
                      <View style={styles.View_I203_292_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_292_197_21}>
                      <View style={styles.View_I203_292_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_293}>
                    <View style={styles.View_I203_293_197_14}>
                      <Text style={styles.Text_I203_293_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_293_197_18}>
                      <View style={styles.View_I203_293_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_293_197_21}>
                      <View style={styles.View_I203_293_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_294}>
                    <View style={styles.View_I203_294_197_14}>
                      <Text style={styles.Text_I203_294_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_294_197_18}>
                      <View style={styles.View_I203_294_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_294_197_21}>
                      <View style={styles.View_I203_294_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_295}>
                    <View style={styles.View_I203_295_197_14}>
                      <Text style={styles.Text_I203_295_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_295_197_18}>
                      <View style={styles.View_I203_295_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_295_197_21}>
                      <View style={styles.View_I203_295_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_339}>
                  <View style={styles.View_197_37}>
                    <View style={styles.View_I197_37_197_14}>
                      <Text style={styles.Text_I197_37_197_14}>Room 10A</Text>
                    </View>
                    <View style={styles.View_I197_37_197_18}>
                      <View style={styles.View_I197_37_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_37_197_299}>
                      <View style={styles.View_I197_37_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_37_197_21}>
                      <View style={styles.View_I197_37_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_341}>
                    <View style={styles.View_I203_341_197_14}>
                      <Text style={styles.Text_I203_341_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_341_197_18}>
                      <View style={styles.View_I203_341_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_341_197_21}>
                      <View style={styles.View_I203_341_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_342}>
                    <View style={styles.View_I203_342_197_14}>
                      <Text style={styles.Text_I203_342_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_342_197_18}>
                      <View style={styles.View_I203_342_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_342_197_21}>
                      <View style={styles.View_I203_342_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_343}>
                    <View style={styles.View_I203_343_197_14}>
                      <Text style={styles.Text_I203_343_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_343_197_18}>
                      <View style={styles.View_I203_343_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_343_197_21}>
                      <View style={styles.View_I203_343_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_344}>
                    <View style={styles.View_I203_344_197_14}>
                      <Text style={styles.Text_I203_344_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_344_197_18}>
                      <View style={styles.View_I203_344_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_344_197_21}>
                      <View style={styles.View_I203_344_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_345}>
                    <View style={styles.View_I203_345_197_14}>
                      <Text style={styles.Text_I203_345_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_345_197_18}>
                      <View style={styles.View_I203_345_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_345_197_21}>
                      <View style={styles.View_I203_345_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_389}>
                  <View style={styles.View_197_50}>
                    <View style={styles.View_I197_50_197_14}>
                      <Text style={styles.Text_I197_50_197_14}>Room 12A</Text>
                    </View>
                    <View style={styles.View_I197_50_197_18}>
                      <View style={styles.View_I197_50_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_50_197_299}>
                      <View style={styles.View_I197_50_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_50_197_21}>
                      <View style={styles.View_I197_50_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_391}>
                    <View style={styles.View_I203_391_197_14}>
                      <Text style={styles.Text_I203_391_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_391_197_18}>
                      <View style={styles.View_I203_391_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_391_197_21}>
                      <View style={styles.View_I203_391_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_392}>
                    <View style={styles.View_I203_392_197_14}>
                      <Text style={styles.Text_I203_392_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_392_197_18}>
                      <View style={styles.View_I203_392_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_392_197_21}>
                      <View style={styles.View_I203_392_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_393}>
                    <View style={styles.View_I203_393_197_14}>
                      <Text style={styles.Text_I203_393_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_393_197_18}>
                      <View style={styles.View_I203_393_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_393_197_21}>
                      <View style={styles.View_I203_393_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_394}>
                    <View style={styles.View_I203_394_197_14}>
                      <Text style={styles.Text_I203_394_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_394_197_18}>
                      <View style={styles.View_I203_394_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_394_197_21}>
                      <View style={styles.View_I203_394_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_395}>
                    <View style={styles.View_I203_395_197_14}>
                      <Text style={styles.Text_I203_395_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_395_197_18}>
                      <View style={styles.View_I203_395_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_395_197_21}>
                      <View style={styles.View_I203_395_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_439}>
                  <View style={styles.View_197_43}>
                    <View style={styles.View_I197_43_197_14}>
                      <Text style={styles.Text_I197_43_197_14}>Room 11A</Text>
                    </View>
                    <View style={styles.View_I197_43_197_18}>
                      <View style={styles.View_I197_43_197_18_0_230} />
                    </View>
                    <View style={styles.View_I197_43_197_299}>
                      <View style={styles.View_I197_43_197_299_0_230} />
                    </View>
                    <View style={styles.View_I197_43_197_21}>
                      <View style={styles.View_I197_43_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_441}>
                    <View style={styles.View_I203_441_197_14}>
                      <Text style={styles.Text_I203_441_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_441_197_18}>
                      <View style={styles.View_I203_441_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_441_197_21}>
                      <View style={styles.View_I203_441_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_442}>
                    <View style={styles.View_I203_442_197_14}>
                      <Text style={styles.Text_I203_442_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_442_197_18}>
                      <View style={styles.View_I203_442_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_442_197_21}>
                      <View style={styles.View_I203_442_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_443}>
                    <View style={styles.View_I203_443_197_14}>
                      <Text style={styles.Text_I203_443_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_443_197_18}>
                      <View style={styles.View_I203_443_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_443_197_21}>
                      <View style={styles.View_I203_443_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_444}>
                    <View style={styles.View_I203_444_197_14}>
                      <Text style={styles.Text_I203_444_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_444_197_18}>
                      <View style={styles.View_I203_444_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_444_197_21}>
                      <View style={styles.View_I203_444_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_445}>
                    <View style={styles.View_I203_445_197_14}>
                      <Text style={styles.Text_I203_445_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_445_197_18}>
                      <View style={styles.View_I203_445_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_445_197_21}>
                      <View style={styles.View_I203_445_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_489}>
                  <View style={styles.View_203_490}>
                    <View style={styles.View_I203_490_197_14}>
                      <Text style={styles.Text_I203_490_197_14}>Room 13C</Text>
                    </View>
                    <View style={styles.View_I203_490_197_18}>
                      <View style={styles.View_I203_490_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_490_197_299}>
                      <View style={styles.View_I203_490_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_490_197_21}>
                      <View style={styles.View_I203_490_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_491}>
                    <View style={styles.View_I203_491_197_14}>
                      <Text style={styles.Text_I203_491_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_491_197_18}>
                      <View style={styles.View_I203_491_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_491_197_21}>
                      <View style={styles.View_I203_491_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_492}>
                    <View style={styles.View_I203_492_197_14}>
                      <Text style={styles.Text_I203_492_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_492_197_18}>
                      <View style={styles.View_I203_492_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_492_197_21}>
                      <View style={styles.View_I203_492_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_493}>
                    <View style={styles.View_I203_493_197_14}>
                      <Text style={styles.Text_I203_493_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_493_197_18}>
                      <View style={styles.View_I203_493_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_493_197_21}>
                      <View style={styles.View_I203_493_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_494}>
                    <View style={styles.View_I203_494_197_14}>
                      <Text style={styles.Text_I203_494_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_494_197_18}>
                      <View style={styles.View_I203_494_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_494_197_21}>
                      <View style={styles.View_I203_494_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_495}>
                    <View style={styles.View_I203_495_197_14}>
                      <Text style={styles.Text_I203_495_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_495_197_18}>
                      <View style={styles.View_I203_495_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_495_197_21}>
                      <View style={styles.View_I203_495_197_21_153_138} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_203_952}>
              <View style={styles.View_I203_952_0_2116}>
                <Text style={styles.Text_I203_952_0_2116}>print sheet</Text>
              </View>
            </View>
            <View style={styles.View_197_66}>
              <Text style={styles.Text_197_66}>Section 1</Text>
            </View>
          </View>
          <View style={styles.View_203_544}>
            <View style={styles.View_203_545}>
              <View style={styles.View_I203_545_0_230} />
            </View>
            <View style={styles.View_203_1411}>
              <View style={styles.View_203_1412}>
                <View style={styles.View_203_1413}>
                  <View style={styles.View_I203_1413_197_92}>
                    <Text style={styles.Text_I203_1413_197_92}>PRODUCTS</Text>
                  </View>
                </View>
                <View style={styles.View_203_1414}>
                  <View style={styles.View_I203_1414_197_92}>
                    <Text style={styles.Text_I203_1414_197_92}>
                      Paper towels
                    </Text>
                  </View>
                  <View style={styles.View_I203_1414_197_93}>
                    <View style={styles.View_I203_1414_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1414_197_94}>
                    <View style={styles.View_I203_1414_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1414_197_95}>
                    <View style={styles.View_I203_1414_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1415}>
                  <View style={styles.View_I203_1415_197_92}>
                    <Text style={styles.Text_I203_1415_197_92}>
                      Toiler tissue
                    </Text>
                  </View>
                  <View style={styles.View_I203_1415_197_93}>
                    <View style={styles.View_I203_1415_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1415_197_94}>
                    <View style={styles.View_I203_1415_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1415_197_95}>
                    <View style={styles.View_I203_1415_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1416}>
                  <View style={styles.View_I203_1416_197_92}>
                    <Text style={styles.Text_I203_1416_197_92}>Hand soap</Text>
                  </View>
                  <View style={styles.View_I203_1416_197_93}>
                    <View style={styles.View_I203_1416_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1416_197_94}>
                    <View style={styles.View_I203_1416_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1416_197_95}>
                    <View style={styles.View_I203_1416_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1417}>
                  <View style={styles.View_I203_1417_197_92}>
                    <Text style={styles.Text_I203_1417_197_92}>
                      Hand Sanitizer
                    </Text>
                  </View>
                  <View style={styles.View_I203_1417_197_93}>
                    <View style={styles.View_I203_1417_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1417_197_94}>
                    <View style={styles.View_I203_1417_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1417_197_95}>
                    <View style={styles.View_I203_1417_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1418}>
                  <View style={styles.View_I203_1418_197_92}>
                    <Text style={styles.Text_I203_1418_197_92}>
                      Disinfectant
                    </Text>
                  </View>
                  <View style={styles.View_I203_1418_197_93}>
                    <View style={styles.View_I203_1418_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1418_197_94}>
                    <View style={styles.View_I203_1418_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1418_197_95}>
                    <View style={styles.View_I203_1418_197_95_153_138} />
                  </View>
                </View>
              </View>
              <View style={styles.View_203_1419}>
                <View style={styles.View_203_1420}>
                  <View style={styles.View_203_1421}>
                    <View style={styles.View_I203_1421_197_14}>
                      <Text style={styles.Text_I203_1421_197_14}>Room 1A</Text>
                    </View>
                    <View style={styles.View_I203_1421_197_18}>
                      <View style={styles.View_I203_1421_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1421_197_299}>
                      <View style={styles.View_I203_1421_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1421_197_21}>
                      <View style={styles.View_I203_1421_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1422}>
                    <View style={styles.View_I203_1422_197_14}>
                      <Text style={styles.Text_I203_1422_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1422_197_18}>
                      <View style={styles.View_I203_1422_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1422_197_21}>
                      <View style={styles.View_I203_1422_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1423}>
                    <View style={styles.View_I203_1423_197_14}>
                      <Text style={styles.Text_I203_1423_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1423_197_18}>
                      <View style={styles.View_I203_1423_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1423_197_21}>
                      <View style={styles.View_I203_1423_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1424}>
                    <View style={styles.View_I203_1424_197_14}>
                      <Text style={styles.Text_I203_1424_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1424_197_18}>
                      <View style={styles.View_I203_1424_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1424_197_21}>
                      <View style={styles.View_I203_1424_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1425}>
                    <View style={styles.View_I203_1425_197_14}>
                      <Text style={styles.Text_I203_1425_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1425_197_18}>
                      <View style={styles.View_I203_1425_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1425_197_21}>
                      <View style={styles.View_I203_1425_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1426}>
                    <View style={styles.View_I203_1426_197_14}>
                      <Text style={styles.Text_I203_1426_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1426_197_18}>
                      <View style={styles.View_I203_1426_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1426_197_21}>
                      <View style={styles.View_I203_1426_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1427}>
                  <View style={styles.View_203_1428}>
                    <View style={styles.View_I203_1428_197_14}>
                      <Text style={styles.Text_I203_1428_197_14}>Room 1B</Text>
                    </View>
                    <View style={styles.View_I203_1428_197_18}>
                      <View style={styles.View_I203_1428_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1428_197_299}>
                      <View style={styles.View_I203_1428_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1428_197_21}>
                      <View style={styles.View_I203_1428_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1429}>
                    <View style={styles.View_I203_1429_197_14}>
                      <Text style={styles.Text_I203_1429_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1429_197_18}>
                      <View style={styles.View_I203_1429_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1429_197_21}>
                      <View style={styles.View_I203_1429_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1430}>
                    <View style={styles.View_I203_1430_197_14}>
                      <Text style={styles.Text_I203_1430_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1430_197_18}>
                      <View style={styles.View_I203_1430_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1430_197_21}>
                      <View style={styles.View_I203_1430_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1431}>
                    <View style={styles.View_I203_1431_197_14}>
                      <Text style={styles.Text_I203_1431_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1431_197_18}>
                      <View style={styles.View_I203_1431_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1431_197_21}>
                      <View style={styles.View_I203_1431_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1432}>
                    <View style={styles.View_I203_1432_197_14}>
                      <Text style={styles.Text_I203_1432_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1432_197_18}>
                      <View style={styles.View_I203_1432_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1432_197_21}>
                      <View style={styles.View_I203_1432_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1433}>
                    <View style={styles.View_I203_1433_197_14}>
                      <Text style={styles.Text_I203_1433_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1433_197_18}>
                      <View style={styles.View_I203_1433_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1433_197_21}>
                      <View style={styles.View_I203_1433_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1434}>
                  <View style={styles.View_203_1435}>
                    <View style={styles.View_I203_1435_197_14}>
                      <Text style={styles.Text_I203_1435_197_14}>Room 1C</Text>
                    </View>
                    <View style={styles.View_I203_1435_197_18}>
                      <View style={styles.View_I203_1435_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1435_197_299}>
                      <View style={styles.View_I203_1435_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1435_197_21}>
                      <View style={styles.View_I203_1435_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1436}>
                    <View style={styles.View_I203_1436_197_14}>
                      <Text style={styles.Text_I203_1436_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1436_197_18}>
                      <View style={styles.View_I203_1436_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1436_197_21}>
                      <View style={styles.View_I203_1436_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1437}>
                    <View style={styles.View_I203_1437_197_14}>
                      <Text style={styles.Text_I203_1437_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1437_197_18}>
                      <View style={styles.View_I203_1437_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1437_197_21}>
                      <View style={styles.View_I203_1437_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1438}>
                    <View style={styles.View_I203_1438_197_14}>
                      <Text style={styles.Text_I203_1438_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1438_197_18}>
                      <View style={styles.View_I203_1438_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1438_197_21}>
                      <View style={styles.View_I203_1438_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1439}>
                    <View style={styles.View_I203_1439_197_14}>
                      <Text style={styles.Text_I203_1439_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1439_197_18}>
                      <View style={styles.View_I203_1439_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1439_197_21}>
                      <View style={styles.View_I203_1439_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1440}>
                    <View style={styles.View_I203_1440_197_14}>
                      <Text style={styles.Text_I203_1440_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1440_197_18}>
                      <View style={styles.View_I203_1440_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1440_197_21}>
                      <View style={styles.View_I203_1440_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1441}>
                  <View style={styles.View_203_1442}>
                    <View style={styles.View_I203_1442_197_14}>
                      <Text style={styles.Text_I203_1442_197_14}>Room 10A</Text>
                    </View>
                    <View style={styles.View_I203_1442_197_18}>
                      <View style={styles.View_I203_1442_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1442_197_299}>
                      <View style={styles.View_I203_1442_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1442_197_21}>
                      <View style={styles.View_I203_1442_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1443}>
                    <View style={styles.View_I203_1443_197_14}>
                      <Text style={styles.Text_I203_1443_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1443_197_18}>
                      <View style={styles.View_I203_1443_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1443_197_21}>
                      <View style={styles.View_I203_1443_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1444}>
                    <View style={styles.View_I203_1444_197_14}>
                      <Text style={styles.Text_I203_1444_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1444_197_18}>
                      <View style={styles.View_I203_1444_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1444_197_21}>
                      <View style={styles.View_I203_1444_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1445}>
                    <View style={styles.View_I203_1445_197_14}>
                      <Text style={styles.Text_I203_1445_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1445_197_18}>
                      <View style={styles.View_I203_1445_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1445_197_21}>
                      <View style={styles.View_I203_1445_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1446}>
                    <View style={styles.View_I203_1446_197_14}>
                      <Text style={styles.Text_I203_1446_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1446_197_18}>
                      <View style={styles.View_I203_1446_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1446_197_21}>
                      <View style={styles.View_I203_1446_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1447}>
                    <View style={styles.View_I203_1447_197_14}>
                      <Text style={styles.Text_I203_1447_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1447_197_18}>
                      <View style={styles.View_I203_1447_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1447_197_21}>
                      <View style={styles.View_I203_1447_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1448}>
                  <View style={styles.View_203_1449}>
                    <View style={styles.View_I203_1449_197_14}>
                      <Text style={styles.Text_I203_1449_197_14}>Room 12A</Text>
                    </View>
                    <View style={styles.View_I203_1449_197_18}>
                      <View style={styles.View_I203_1449_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1449_197_299}>
                      <View style={styles.View_I203_1449_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1449_197_21}>
                      <View style={styles.View_I203_1449_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1450}>
                    <View style={styles.View_I203_1450_197_14}>
                      <Text style={styles.Text_I203_1450_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1450_197_18}>
                      <View style={styles.View_I203_1450_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1450_197_21}>
                      <View style={styles.View_I203_1450_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1451}>
                    <View style={styles.View_I203_1451_197_14}>
                      <Text style={styles.Text_I203_1451_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1451_197_18}>
                      <View style={styles.View_I203_1451_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1451_197_21}>
                      <View style={styles.View_I203_1451_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1452}>
                    <View style={styles.View_I203_1452_197_14}>
                      <Text style={styles.Text_I203_1452_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1452_197_18}>
                      <View style={styles.View_I203_1452_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1452_197_21}>
                      <View style={styles.View_I203_1452_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1453}>
                    <View style={styles.View_I203_1453_197_14}>
                      <Text style={styles.Text_I203_1453_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1453_197_18}>
                      <View style={styles.View_I203_1453_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1453_197_21}>
                      <View style={styles.View_I203_1453_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1454}>
                    <View style={styles.View_I203_1454_197_14}>
                      <Text style={styles.Text_I203_1454_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1454_197_18}>
                      <View style={styles.View_I203_1454_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1454_197_21}>
                      <View style={styles.View_I203_1454_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1455}>
                  <View style={styles.View_203_1456}>
                    <View style={styles.View_I203_1456_197_14}>
                      <Text style={styles.Text_I203_1456_197_14}>Room 11A</Text>
                    </View>
                    <View style={styles.View_I203_1456_197_18}>
                      <View style={styles.View_I203_1456_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1456_197_299}>
                      <View style={styles.View_I203_1456_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1456_197_21}>
                      <View style={styles.View_I203_1456_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1457}>
                    <View style={styles.View_I203_1457_197_14}>
                      <Text style={styles.Text_I203_1457_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1457_197_18}>
                      <View style={styles.View_I203_1457_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1457_197_21}>
                      <View style={styles.View_I203_1457_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1458}>
                    <View style={styles.View_I203_1458_197_14}>
                      <Text style={styles.Text_I203_1458_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1458_197_18}>
                      <View style={styles.View_I203_1458_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1458_197_21}>
                      <View style={styles.View_I203_1458_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1459}>
                    <View style={styles.View_I203_1459_197_14}>
                      <Text style={styles.Text_I203_1459_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1459_197_18}>
                      <View style={styles.View_I203_1459_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1459_197_21}>
                      <View style={styles.View_I203_1459_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1460}>
                    <View style={styles.View_I203_1460_197_14}>
                      <Text style={styles.Text_I203_1460_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1460_197_18}>
                      <View style={styles.View_I203_1460_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1460_197_21}>
                      <View style={styles.View_I203_1460_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1461}>
                    <View style={styles.View_I203_1461_197_14}>
                      <Text style={styles.Text_I203_1461_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1461_197_18}>
                      <View style={styles.View_I203_1461_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1461_197_21}>
                      <View style={styles.View_I203_1461_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1462}>
                  <View style={styles.View_203_1463}>
                    <View style={styles.View_I203_1463_197_14}>
                      <Text style={styles.Text_I203_1463_197_14}>Room 13C</Text>
                    </View>
                    <View style={styles.View_I203_1463_197_18}>
                      <View style={styles.View_I203_1463_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1463_197_299}>
                      <View style={styles.View_I203_1463_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1463_197_21}>
                      <View style={styles.View_I203_1463_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1464}>
                    <View style={styles.View_I203_1464_197_14}>
                      <Text style={styles.Text_I203_1464_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1464_197_18}>
                      <View style={styles.View_I203_1464_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1464_197_21}>
                      <View style={styles.View_I203_1464_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1465}>
                    <View style={styles.View_I203_1465_197_14}>
                      <Text style={styles.Text_I203_1465_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1465_197_18}>
                      <View style={styles.View_I203_1465_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1465_197_21}>
                      <View style={styles.View_I203_1465_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1466}>
                    <View style={styles.View_I203_1466_197_14}>
                      <Text style={styles.Text_I203_1466_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1466_197_18}>
                      <View style={styles.View_I203_1466_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1466_197_21}>
                      <View style={styles.View_I203_1466_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1467}>
                    <View style={styles.View_I203_1467_197_14}>
                      <Text style={styles.Text_I203_1467_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1467_197_18}>
                      <View style={styles.View_I203_1467_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1467_197_21}>
                      <View style={styles.View_I203_1467_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1468}>
                    <View style={styles.View_I203_1468_197_14}>
                      <Text style={styles.Text_I203_1468_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1468_197_18}>
                      <View style={styles.View_I203_1468_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1468_197_21}>
                      <View style={styles.View_I203_1468_197_21_153_138} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_203_604}>
              <Text style={styles.Text_203_604}>Section 2</Text>
            </View>
            <View style={styles.View_203_958}>
              <View style={styles.View_I203_958_0_2116}>
                <Text style={styles.Text_I203_958_0_2116}>print sheet</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_203_960}>
            <View style={styles.View_203_961}>
              <View style={styles.View_I203_961_0_230} />
            </View>
            <View style={styles.View_203_1815}>
              <View style={styles.View_203_1816}>
                <View style={styles.View_203_1817}>
                  <View style={styles.View_I203_1817_197_92}>
                    <Text style={styles.Text_I203_1817_197_92}>PRODUCTS</Text>
                  </View>
                </View>
                <View style={styles.View_203_1818}>
                  <View style={styles.View_I203_1818_197_92}>
                    <Text style={styles.Text_I203_1818_197_92}>
                      Paper towels
                    </Text>
                  </View>
                  <View style={styles.View_I203_1818_197_93}>
                    <View style={styles.View_I203_1818_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1818_197_94}>
                    <View style={styles.View_I203_1818_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1818_197_95}>
                    <View style={styles.View_I203_1818_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1819}>
                  <View style={styles.View_I203_1819_197_92}>
                    <Text style={styles.Text_I203_1819_197_92}>
                      Toiler tissue
                    </Text>
                  </View>
                  <View style={styles.View_I203_1819_197_93}>
                    <View style={styles.View_I203_1819_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1819_197_94}>
                    <View style={styles.View_I203_1819_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1819_197_95}>
                    <View style={styles.View_I203_1819_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1820}>
                  <View style={styles.View_I203_1820_197_92}>
                    <Text style={styles.Text_I203_1820_197_92}>Hand soap</Text>
                  </View>
                  <View style={styles.View_I203_1820_197_93}>
                    <View style={styles.View_I203_1820_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1820_197_94}>
                    <View style={styles.View_I203_1820_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1820_197_95}>
                    <View style={styles.View_I203_1820_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1821}>
                  <View style={styles.View_I203_1821_197_92}>
                    <Text style={styles.Text_I203_1821_197_92}>
                      Hand Sanitizer
                    </Text>
                  </View>
                  <View style={styles.View_I203_1821_197_93}>
                    <View style={styles.View_I203_1821_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1821_197_94}>
                    <View style={styles.View_I203_1821_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1821_197_95}>
                    <View style={styles.View_I203_1821_197_95_153_138} />
                  </View>
                </View>
                <View style={styles.View_203_1822}>
                  <View style={styles.View_I203_1822_197_92}>
                    <Text style={styles.Text_I203_1822_197_92}>
                      Disinfectant
                    </Text>
                  </View>
                  <View style={styles.View_I203_1822_197_93}>
                    <View style={styles.View_I203_1822_197_93_0_230} />
                  </View>
                  <View style={styles.View_I203_1822_197_94}>
                    <View style={styles.View_I203_1822_197_94_153_138} />
                  </View>
                  <View style={styles.View_I203_1822_197_95}>
                    <View style={styles.View_I203_1822_197_95_153_138} />
                  </View>
                </View>
              </View>
              <View style={styles.View_203_1823}>
                <View style={styles.View_203_1824}>
                  <View style={styles.View_203_1825}>
                    <View style={styles.View_I203_1825_197_14}>
                      <Text style={styles.Text_I203_1825_197_14}>Room 1A</Text>
                    </View>
                    <View style={styles.View_I203_1825_197_18}>
                      <View style={styles.View_I203_1825_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1825_197_299}>
                      <View style={styles.View_I203_1825_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1825_197_21}>
                      <View style={styles.View_I203_1825_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1826}>
                    <View style={styles.View_I203_1826_197_14}>
                      <Text style={styles.Text_I203_1826_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1826_197_18}>
                      <View style={styles.View_I203_1826_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1826_197_21}>
                      <View style={styles.View_I203_1826_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1827}>
                    <View style={styles.View_I203_1827_197_14}>
                      <Text style={styles.Text_I203_1827_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1827_197_18}>
                      <View style={styles.View_I203_1827_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1827_197_21}>
                      <View style={styles.View_I203_1827_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1828}>
                    <View style={styles.View_I203_1828_197_14}>
                      <Text style={styles.Text_I203_1828_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1828_197_18}>
                      <View style={styles.View_I203_1828_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1828_197_21}>
                      <View style={styles.View_I203_1828_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1829}>
                    <View style={styles.View_I203_1829_197_14}>
                      <Text style={styles.Text_I203_1829_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1829_197_18}>
                      <View style={styles.View_I203_1829_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1829_197_21}>
                      <View style={styles.View_I203_1829_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1830}>
                    <View style={styles.View_I203_1830_197_14}>
                      <Text style={styles.Text_I203_1830_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1830_197_18}>
                      <View style={styles.View_I203_1830_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1830_197_21}>
                      <View style={styles.View_I203_1830_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1831}>
                  <View style={styles.View_203_1832}>
                    <View style={styles.View_I203_1832_197_14}>
                      <Text style={styles.Text_I203_1832_197_14}>Room 1B</Text>
                    </View>
                    <View style={styles.View_I203_1832_197_18}>
                      <View style={styles.View_I203_1832_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1832_197_299}>
                      <View style={styles.View_I203_1832_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1832_197_21}>
                      <View style={styles.View_I203_1832_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1833}>
                    <View style={styles.View_I203_1833_197_14}>
                      <Text style={styles.Text_I203_1833_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1833_197_18}>
                      <View style={styles.View_I203_1833_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1833_197_21}>
                      <View style={styles.View_I203_1833_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1834}>
                    <View style={styles.View_I203_1834_197_14}>
                      <Text style={styles.Text_I203_1834_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1834_197_18}>
                      <View style={styles.View_I203_1834_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1834_197_21}>
                      <View style={styles.View_I203_1834_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1835}>
                    <View style={styles.View_I203_1835_197_14}>
                      <Text style={styles.Text_I203_1835_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1835_197_18}>
                      <View style={styles.View_I203_1835_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1835_197_21}>
                      <View style={styles.View_I203_1835_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1836}>
                    <View style={styles.View_I203_1836_197_14}>
                      <Text style={styles.Text_I203_1836_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1836_197_18}>
                      <View style={styles.View_I203_1836_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1836_197_21}>
                      <View style={styles.View_I203_1836_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1837}>
                    <View style={styles.View_I203_1837_197_14}>
                      <Text style={styles.Text_I203_1837_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1837_197_18}>
                      <View style={styles.View_I203_1837_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1837_197_21}>
                      <View style={styles.View_I203_1837_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1838}>
                  <View style={styles.View_203_1839}>
                    <View style={styles.View_I203_1839_197_14}>
                      <Text style={styles.Text_I203_1839_197_14}>Room 1C</Text>
                    </View>
                    <View style={styles.View_I203_1839_197_18}>
                      <View style={styles.View_I203_1839_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1839_197_299}>
                      <View style={styles.View_I203_1839_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1839_197_21}>
                      <View style={styles.View_I203_1839_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1840}>
                    <View style={styles.View_I203_1840_197_14}>
                      <Text style={styles.Text_I203_1840_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1840_197_18}>
                      <View style={styles.View_I203_1840_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1840_197_21}>
                      <View style={styles.View_I203_1840_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1841}>
                    <View style={styles.View_I203_1841_197_14}>
                      <Text style={styles.Text_I203_1841_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1841_197_18}>
                      <View style={styles.View_I203_1841_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1841_197_21}>
                      <View style={styles.View_I203_1841_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1842}>
                    <View style={styles.View_I203_1842_197_14}>
                      <Text style={styles.Text_I203_1842_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1842_197_18}>
                      <View style={styles.View_I203_1842_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1842_197_21}>
                      <View style={styles.View_I203_1842_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1843}>
                    <View style={styles.View_I203_1843_197_14}>
                      <Text style={styles.Text_I203_1843_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1843_197_18}>
                      <View style={styles.View_I203_1843_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1843_197_21}>
                      <View style={styles.View_I203_1843_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1844}>
                    <View style={styles.View_I203_1844_197_14}>
                      <Text style={styles.Text_I203_1844_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1844_197_18}>
                      <View style={styles.View_I203_1844_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1844_197_21}>
                      <View style={styles.View_I203_1844_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1845}>
                  <View style={styles.View_203_1846}>
                    <View style={styles.View_I203_1846_197_14}>
                      <Text style={styles.Text_I203_1846_197_14}>Room 10A</Text>
                    </View>
                    <View style={styles.View_I203_1846_197_18}>
                      <View style={styles.View_I203_1846_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1846_197_299}>
                      <View style={styles.View_I203_1846_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1846_197_21}>
                      <View style={styles.View_I203_1846_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1847}>
                    <View style={styles.View_I203_1847_197_14}>
                      <Text style={styles.Text_I203_1847_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1847_197_18}>
                      <View style={styles.View_I203_1847_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1847_197_21}>
                      <View style={styles.View_I203_1847_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1848}>
                    <View style={styles.View_I203_1848_197_14}>
                      <Text style={styles.Text_I203_1848_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1848_197_18}>
                      <View style={styles.View_I203_1848_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1848_197_21}>
                      <View style={styles.View_I203_1848_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1849}>
                    <View style={styles.View_I203_1849_197_14}>
                      <Text style={styles.Text_I203_1849_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1849_197_18}>
                      <View style={styles.View_I203_1849_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1849_197_21}>
                      <View style={styles.View_I203_1849_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1850}>
                    <View style={styles.View_I203_1850_197_14}>
                      <Text style={styles.Text_I203_1850_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1850_197_18}>
                      <View style={styles.View_I203_1850_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1850_197_21}>
                      <View style={styles.View_I203_1850_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1851}>
                    <View style={styles.View_I203_1851_197_14}>
                      <Text style={styles.Text_I203_1851_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1851_197_18}>
                      <View style={styles.View_I203_1851_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1851_197_21}>
                      <View style={styles.View_I203_1851_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1852}>
                  <View style={styles.View_203_1853}>
                    <View style={styles.View_I203_1853_197_14}>
                      <Text style={styles.Text_I203_1853_197_14}>Room 12A</Text>
                    </View>
                    <View style={styles.View_I203_1853_197_18}>
                      <View style={styles.View_I203_1853_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1853_197_299}>
                      <View style={styles.View_I203_1853_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1853_197_21}>
                      <View style={styles.View_I203_1853_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1854}>
                    <View style={styles.View_I203_1854_197_14}>
                      <Text style={styles.Text_I203_1854_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1854_197_18}>
                      <View style={styles.View_I203_1854_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1854_197_21}>
                      <View style={styles.View_I203_1854_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1855}>
                    <View style={styles.View_I203_1855_197_14}>
                      <Text style={styles.Text_I203_1855_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1855_197_18}>
                      <View style={styles.View_I203_1855_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1855_197_21}>
                      <View style={styles.View_I203_1855_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1856}>
                    <View style={styles.View_I203_1856_197_14}>
                      <Text style={styles.Text_I203_1856_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1856_197_18}>
                      <View style={styles.View_I203_1856_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1856_197_21}>
                      <View style={styles.View_I203_1856_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1857}>
                    <View style={styles.View_I203_1857_197_14}>
                      <Text style={styles.Text_I203_1857_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1857_197_18}>
                      <View style={styles.View_I203_1857_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1857_197_21}>
                      <View style={styles.View_I203_1857_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1858}>
                    <View style={styles.View_I203_1858_197_14}>
                      <Text style={styles.Text_I203_1858_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1858_197_18}>
                      <View style={styles.View_I203_1858_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1858_197_21}>
                      <View style={styles.View_I203_1858_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1859}>
                  <View style={styles.View_203_1860}>
                    <View style={styles.View_I203_1860_197_14}>
                      <Text style={styles.Text_I203_1860_197_14}>Room 11A</Text>
                    </View>
                    <View style={styles.View_I203_1860_197_18}>
                      <View style={styles.View_I203_1860_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1860_197_299}>
                      <View style={styles.View_I203_1860_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1860_197_21}>
                      <View style={styles.View_I203_1860_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1861}>
                    <View style={styles.View_I203_1861_197_14}>
                      <Text style={styles.Text_I203_1861_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1861_197_18}>
                      <View style={styles.View_I203_1861_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1861_197_21}>
                      <View style={styles.View_I203_1861_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1862}>
                    <View style={styles.View_I203_1862_197_14}>
                      <Text style={styles.Text_I203_1862_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1862_197_18}>
                      <View style={styles.View_I203_1862_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1862_197_21}>
                      <View style={styles.View_I203_1862_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1863}>
                    <View style={styles.View_I203_1863_197_14}>
                      <Text style={styles.Text_I203_1863_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1863_197_18}>
                      <View style={styles.View_I203_1863_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1863_197_21}>
                      <View style={styles.View_I203_1863_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1864}>
                    <View style={styles.View_I203_1864_197_14}>
                      <Text style={styles.Text_I203_1864_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1864_197_18}>
                      <View style={styles.View_I203_1864_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1864_197_21}>
                      <View style={styles.View_I203_1864_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1865}>
                    <View style={styles.View_I203_1865_197_14}>
                      <Text style={styles.Text_I203_1865_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1865_197_18}>
                      <View style={styles.View_I203_1865_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1865_197_21}>
                      <View style={styles.View_I203_1865_197_21_153_138} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_203_1866}>
                  <View style={styles.View_203_1867}>
                    <View style={styles.View_I203_1867_197_14}>
                      <Text style={styles.Text_I203_1867_197_14}>Room 13C</Text>
                    </View>
                    <View style={styles.View_I203_1867_197_18}>
                      <View style={styles.View_I203_1867_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1867_197_299}>
                      <View style={styles.View_I203_1867_197_299_0_230} />
                    </View>
                    <View style={styles.View_I203_1867_197_21}>
                      <View style={styles.View_I203_1867_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1868}>
                    <View style={styles.View_I203_1868_197_14}>
                      <Text style={styles.Text_I203_1868_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1868_197_18}>
                      <View style={styles.View_I203_1868_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1868_197_21}>
                      <View style={styles.View_I203_1868_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1869}>
                    <View style={styles.View_I203_1869_197_14}>
                      <Text style={styles.Text_I203_1869_197_14}>10</Text>
                    </View>
                    <View style={styles.View_I203_1869_197_18}>
                      <View style={styles.View_I203_1869_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1869_197_21}>
                      <View style={styles.View_I203_1869_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1870}>
                    <View style={styles.View_I203_1870_197_14}>
                      <Text style={styles.Text_I203_1870_197_14}>11</Text>
                    </View>
                    <View style={styles.View_I203_1870_197_18}>
                      <View style={styles.View_I203_1870_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1870_197_21}>
                      <View style={styles.View_I203_1870_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1871}>
                    <View style={styles.View_I203_1871_197_14}>
                      <Text style={styles.Text_I203_1871_197_14}>13</Text>
                    </View>
                    <View style={styles.View_I203_1871_197_18}>
                      <View style={styles.View_I203_1871_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1871_197_21}>
                      <View style={styles.View_I203_1871_197_21_153_138} />
                    </View>
                  </View>
                  <View style={styles.View_203_1872}>
                    <View style={styles.View_I203_1872_197_14}>
                      <Text style={styles.Text_I203_1872_197_14}>12</Text>
                    </View>
                    <View style={styles.View_I203_1872_197_18}>
                      <View style={styles.View_I203_1872_197_18_0_230} />
                    </View>
                    <View style={styles.View_I203_1872_197_21}>
                      <View style={styles.View_I203_1872_197_21_153_138} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_203_1020}>
              <Text style={styles.Text_203_1020}>Section 3</Text>
            </View>
            <View style={styles.View_203_1021}>
              <View style={styles.View_I203_1021_0_2116}>
                <Text style={styles.Text_I203_1021_0_2116}>print sheet</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_173_540}>
          <View style={styles.View_I173_540_153_6134}>
            <View style={styles.View_I173_540_153_6134_153_6159}>
              <View style={styles.View_I173_540_153_6134_0_890}>
                <Text style={styles.Text_I173_540_153_6134_0_890}>reports</Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6134_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6135}>
            <View style={styles.View_I173_540_153_6135_153_6159}>
              <View style={styles.View_I173_540_153_6135_0_890}>
                <Text style={styles.Text_I173_540_153_6135_0_890}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6135_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6136}>
            <View style={styles.View_I173_540_153_6136_153_6159}>
              <View style={styles.View_I173_540_153_6136_0_890}>
                <Text style={styles.Text_I173_540_153_6136_0_890}>People</Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6136_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6144}>
            <View style={styles.View_I173_540_153_6144_153_6159}>
              <View style={styles.View_I173_540_153_6144_0_890}>
                <Text style={styles.Text_I173_540_153_6144_0_890}>
                  Budgeting
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6144_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6147}>
            <View style={styles.View_I173_540_153_6147_153_6159}>
              <View style={styles.View_I173_540_153_6147_0_890}>
                <Text style={styles.Text_I173_540_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6147_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6150}>
            <View style={styles.View_I173_540_153_6150_153_6159}>
              <View style={styles.View_I173_540_153_6150_0_890}>
                <Text style={styles.Text_I173_540_153_6150_0_890}>savings</Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6150_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6153}>
            <View style={styles.View_I173_540_153_6153_153_6159}>
              <View style={styles.View_I173_540_153_6153_0_890}>
                <Text style={styles.Text_I173_540_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6153_0_892} />
          </View>
          <View style={styles.View_I173_540_153_6156}>
            <View style={styles.View_I173_540_153_6156_153_6263}>
              <View style={styles.View_I173_540_153_6156_0_897}>
                <Text style={styles.Text_I173_540_153_6156_0_897}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I173_540_153_6156_0_896}>
              <View style={styles.View_I173_540_153_6156_0_896_0_342} />
            </View>
          </View>
        </View>
        <View style={styles.View_173_541}>
          <View style={styles.View_I173_541_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
              }}
              style={styles.ImageBackground_I173_541_153_6113}
            />
            <View style={styles.View_I173_541_153_6114} />
          </View>
          <View style={styles.View_I173_541_153_6116}>
            <View style={styles.View_I173_541_153_6117}>
              <Text style={styles.Text_I173_541_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I173_541_153_6118}
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
  View_172_491: {
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
  View_172_492: {
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
  View_172_493: {
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
  View_I172_493_153_5917: {
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
  View_I172_493_153_5898: {
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
  ImageBackground_I172_493_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I172_493_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I172_493_153_5902: {
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
  View_I172_493_153_5903: {
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
  View_I172_493_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I172_493_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I172_493_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I172_493_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I172_493_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I172_493_153_5907: {
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
  View_I172_493_153_5908: {
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
  ImageBackground_I172_493_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I172_493_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I172_493_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I172_493_153_5909: {
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
  View_I172_493_153_5909_0_230: {
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
  View_172_494: {
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
  View_I172_494_153_5917: {
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
  View_I172_494_153_5898: {
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
  ImageBackground_I172_494_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I172_494_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I172_494_153_5902: {
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
  View_I172_494_153_5903: {
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
  View_I172_494_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I172_494_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I172_494_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I172_494_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I172_494_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I172_494_153_5907: {
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
  View_I172_494_153_5908: {
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
  ImageBackground_I172_494_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I172_494_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I172_494_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I172_494_153_5909: {
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
  View_I172_494_153_5909_0_230: {
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
  View_172_495: {
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
  View_I172_495_153_5917: {
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
  View_I172_495_153_5898: {
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
  ImageBackground_I172_495_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I172_495_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I172_495_153_5902: {
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
  View_I172_495_153_5903: {
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
  View_I172_495_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I172_495_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I172_495_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I172_495_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I172_495_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I172_495_153_5907: {
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
  View_I172_495_153_5908: {
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
  ImageBackground_I172_495_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I172_495_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I172_495_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I172_495_153_5909: {
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
  View_I172_495_153_5909_0_230: {
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
  View_172_496: {
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
  View_I172_496_153_5917: {
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
  View_I172_496_153_5898: {
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
  ImageBackground_I172_496_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I172_496_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I172_496_153_5902: {
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
  View_I172_496_153_5903: {
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
  View_I172_496_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I172_496_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I172_496_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I172_496_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I172_496_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I172_496_153_5907: {
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
  View_I172_496_153_5908: {
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
  ImageBackground_I172_496_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I172_496_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I172_496_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I172_496_153_5909: {
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
  View_I172_496_153_5909_0_230: {
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
  View_190_220: {
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
  View_I190_220_153_130: {
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
  View_I190_220_153_130_0_230: {
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
  View_I190_220_189_362: {
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
  ImageBackground_I190_220_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I190_220_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I190_220_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I190_220_186_25: {
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
  View_I190_220_189_292: {
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
  ImageBackground_I190_220_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_220_153_136: {
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
  View_I190_220_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I190_220_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I190_220_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I190_220_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I190_220_139_759: {
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
  View_I190_220_139_761: {
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
  View_I190_220_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I190_220_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_220_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I190_220_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_220_229_3960: {
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
  ImageBackground_I190_220_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_220_229_1982: {
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
  View_I190_220_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I190_220_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I190_220_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I190_220_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I190_220_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_542: {
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
  View_I173_542_153_138: {
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
  View_172_506: {
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
  View_172_528: {
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
  View_203_539: {
    width: wp("70.76388888888889%"),
    minWidth: wp("70.76388888888889%"),
    height: 332,
    minHeight: 332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_203_540: {
    width: wp("70.76388888888889%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 331,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_540_0_230: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_237: {
    flexGrow: 1,
    width: wp("68.54166666666667%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_244: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_230: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_230_197_92: {
    flexGrow: 1,
    width: wp("5.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_230_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_197_245: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_245_197_92: {
    flexGrow: 1,
    width: wp("6.597222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_245_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_245_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_245_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_245_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_245_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_245_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_245_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_197_253: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_253_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_253_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_253_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_253_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_253_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_253_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_253_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_253_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_197_261: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_261_197_92: {
    flexGrow: 1,
    width: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_261_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_261_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_261_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_261_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_261_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_261_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_261_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_197_269: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_269_197_92: {
    flexGrow: 1,
    width: wp("7.430555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_269_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_269_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_269_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_269_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_269_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_269_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_269_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_197_277: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_277_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I197_277_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_277_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_277_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_277_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_277_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_277_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_277_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_236: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111114%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_238: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_84: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_84_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319444444444429%"),
    top: 8
  },
  Text_I197_84_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_84_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_84_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_84_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_84_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_84_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_84_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_41: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_41_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_41_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_41_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_41_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_41_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_41_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_43: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_43_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_43_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_43_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_43_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_43_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_43_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_44: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_44_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_44_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_44_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_44_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_44_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_44_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_45: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_45_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_45_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_45_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_45_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_45_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_45_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_46: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_46_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_46_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_46_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_46_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_46_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_46_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_239: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.936507331000428%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_25: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_25_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.63194444444445%"),
    top: 8
  },
  Text_I197_25_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_25_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_25_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_25_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_25_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_25_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_25_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_241: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_241_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_241_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_241_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_241_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_241_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_241_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_242: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_242_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_242_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_242_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_242_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_242_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_242_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_243: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_243_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_243_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_243_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_243_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_243_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_243_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_244: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_244_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_244_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_244_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_244_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_244_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_244_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_245: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_245_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_245_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_245_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_245_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_245_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_245_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_289: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.873015721638993%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_31: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_31_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319433848063127%"),
    top: 8
  },
  Text_I197_31_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_31_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_31_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_31_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_31_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_31_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_31_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_291: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_291_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_291_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_291_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_291_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_291_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_291_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_292: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_292_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_292_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_292_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_292_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_292_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_292_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_293: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_293_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_293_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_293_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_293_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_293_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_293_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_294: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_294_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_294_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_294_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_294_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_294_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_294_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_295: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_295_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_295_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_295_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_295_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_295_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_295_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_339: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.80952411227755%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_37: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_37_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I197_37_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_37_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_37_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_37_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_37_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_37_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_37_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_341: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_341_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_341_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_341_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_341_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_341_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_341_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_342: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_342_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_342_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_342_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_342_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_342_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_342_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_343: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_343_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_343_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_343_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_343_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_343_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_343_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_344: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_344_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_344_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_344_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_344_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_344_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_344_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_345: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_345_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_345_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_345_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_345_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_345_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_345_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_389: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.746031443277992%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_50: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_50_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I197_50_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_50_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_50_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_50_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_50_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_50_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_50_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_391: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_391_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_391_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_391_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_391_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_391_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_391_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_392: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_392_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_392_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_392_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_392_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_392_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_392_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_393: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_393_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_393_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_393_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_393_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_393_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_393_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_394: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_394_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_394_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_394_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_394_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_394_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_394_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_395: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_395_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_395_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_395_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_395_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_395_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_395_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_439: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.68254089355468%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_43: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I197_43_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I197_43_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I197_43_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_43_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_43_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_43_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I197_43_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_43_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_441: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_441_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_441_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_441_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_441_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_441_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_441_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_442: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_442_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_442_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_442_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_442_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_442_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_442_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_443: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_443_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_443_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_443_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_443_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_443_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_443_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_444: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_444_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_444_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_444_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_444_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_444_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_444_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_445: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_445_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_445_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_445_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_445_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_445_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_445_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_489: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.61904822455512%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_490: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_490_197_14: {
    flexGrow: 1,
    width: wp("5.277777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I203_490_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_490_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_490_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_490_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_490_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_490_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_490_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_491: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_491_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_491_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_491_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_491_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_491_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_491_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_492: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_492_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_492_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_492_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_492_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_492_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_492_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_493: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_493_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_493_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_493_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_493_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_493_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_493_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_494: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_494_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_494_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_494_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_494_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_494_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_494_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_495: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_495_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_495_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_495_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_495_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_495_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_495_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_952: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555556%"),
    top: 16,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I203_952_0_2116: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 10
  },
  Text_I203_952_0_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_197_66: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 24
  },
  Text_197_66: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_203_544: {
    width: wp("70.76388888888889%"),
    minWidth: wp("70.76388888888889%"),
    height: 332,
    minHeight: 332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 332,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_203_545: {
    width: wp("70.76388888888889%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 331,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_545_0_230: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1411: {
    flexGrow: 1,
    width: wp("68.54166666666667%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1412: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1413: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1413_197_92: {
    flexGrow: 1,
    width: wp("5.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1413_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_203_1414: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1414_197_92: {
    flexGrow: 1,
    width: wp("6.597222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1414_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1414_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1414_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1414_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1414_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1414_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1414_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1415: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1415_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1415_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1415_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1415_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1415_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1415_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1415_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1415_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1416: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1416_197_92: {
    flexGrow: 1,
    width: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1416_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1416_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1416_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1416_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1416_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1416_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1416_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1417: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1417_197_92: {
    flexGrow: 1,
    width: wp("7.430555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1417_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1417_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1417_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1417_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1417_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1417_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1417_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1418: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1418_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1418_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1418_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1418_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1418_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1418_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1418_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1418_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1419: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111114%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1420: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1421: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1421_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319444444444429%"),
    top: 8
  },
  Text_I203_1421_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1421_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1421_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1421_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1421_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1421_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1421_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1422: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1422_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1422_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1422_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1422_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1422_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1422_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1423: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1423_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1423_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1423_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1423_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1423_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1423_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1424: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1424_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1424_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1424_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1424_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1424_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1424_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1425: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1425_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1425_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1425_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1425_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1425_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1425_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1426: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1426_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1426_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1426_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1426_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1426_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1426_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1427: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.936507331000428%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1428: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1428_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.63194444444445%"),
    top: 8
  },
  Text_I203_1428_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1428_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1428_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1428_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1428_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1428_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1428_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1429: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1429_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1429_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1429_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1429_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1429_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1429_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1430: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1430_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1430_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1430_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1430_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1430_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1430_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1431: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1431_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1431_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1431_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1431_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1431_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1431_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1432: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1432_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1432_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1432_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1432_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1432_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1432_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1433: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1433_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1433_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1433_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1433_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1433_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1433_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1434: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.873015721638993%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1435: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1435_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319433848063127%"),
    top: 8
  },
  Text_I203_1435_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1435_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1435_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1435_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1435_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1435_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1435_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1436: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1436_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1436_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1436_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1436_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1436_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1436_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1437: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1437_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1437_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1437_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1437_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1437_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1437_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1438: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1438_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1438_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1438_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1438_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1438_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1438_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1439: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1439_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1439_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1439_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1439_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1439_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1439_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1440: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1440_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1440_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1440_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1440_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1440_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1440_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1441: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.80952411227755%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1442: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1442_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I203_1442_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1442_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1442_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1442_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1442_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1442_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1442_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1443: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1443_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1443_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1443_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1443_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1443_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1443_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1444: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1444_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1444_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1444_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1444_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1444_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1444_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1445: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1445_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1445_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1445_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1445_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1445_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1445_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1446: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1446_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1446_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1446_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1446_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1446_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1446_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1447: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1447_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1447_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1447_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1447_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1447_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1447_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1448: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.746031443277992%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1449: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1449_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I203_1449_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1449_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1449_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1449_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1449_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1449_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1449_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1450: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1450_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1450_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1450_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1450_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1450_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1450_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1451: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1451_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1451_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1451_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1451_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1451_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1451_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1452: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1452_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1452_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1452_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1452_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1452_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1452_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1453: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1453_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1453_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1453_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1453_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1453_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1453_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1454: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1454_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1454_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1454_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1454_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1454_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1454_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1455: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.68254089355468%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1456: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1456_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I203_1456_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1456_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1456_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1456_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1456_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1456_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1456_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1457: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1457_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1457_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1457_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1457_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1457_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1457_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1458: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1458_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1458_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1458_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1458_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1458_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1458_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1459: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1459_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1459_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1459_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1459_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1459_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1459_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1460: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1460_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1460_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1460_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1460_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1460_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1460_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1461: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1461_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1461_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1461_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1461_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1461_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1461_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1462: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.61904822455512%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1463: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1463_197_14: {
    flexGrow: 1,
    width: wp("5.277777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I203_1463_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1463_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1463_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1463_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1463_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1463_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1463_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1464: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1464_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1464_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1464_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1464_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1464_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1464_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1465: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1465_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1465_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1465_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1465_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1465_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1465_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1466: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1466_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1466_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1466_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1466_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1466_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1466_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1467: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1467_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1467_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1467_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1467_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1467_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1467_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1468: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1468_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1468_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1468_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1468_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1468_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1468_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_604: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 24
  },
  Text_203_604: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_203_958: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555556%"),
    top: 16,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I203_958_0_2116: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 10
  },
  Text_I203_958_0_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_203_960: {
    width: wp("70.76388888888889%"),
    minWidth: wp("70.76388888888889%"),
    height: 332,
    minHeight: 332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 664,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_203_961: {
    width: wp("70.76388888888889%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 331,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_961_0_230: {
    flexGrow: 1,
    width: wp("70.76388888888889%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1815: {
    flexGrow: 1,
    width: wp("68.54166666666667%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1816: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1817: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1817_197_92: {
    flexGrow: 1,
    width: wp("5.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1817_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_203_1818: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1818_197_92: {
    flexGrow: 1,
    width: wp("6.597222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1818_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1818_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1818_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1818_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1818_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1818_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1818_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1819: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1819_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1819_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1819_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1819_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1819_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1819_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1819_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1819_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1820: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1820_197_92: {
    flexGrow: 1,
    width: wp("5.486111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1820_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1820_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1820_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1820_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1820_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1820_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1820_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1821: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1821_197_92: {
    flexGrow: 1,
    width: wp("7.430555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1821_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1821_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1821_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1821_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1821_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1821_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1821_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1822: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1822_197_92: {
    flexGrow: 1,
    width: wp("6.180555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: 8
  },
  Text_I203_1822_197_92: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1822_197_93: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1822_197_93_0_230: {
    flexGrow: 1,
    width: wp("12.986111111111112%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1822_197_94: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1822_197_94_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1822_197_95: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1822_197_95_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1823: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.986111111111114%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1824: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1825: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1825_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319444444444429%"),
    top: 8
  },
  Text_I203_1825_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1825_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1825_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1825_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1825_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1825_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1825_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1826: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1826_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1826_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1826_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1826_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1826_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1826_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1827: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1827_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1827_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1827_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1827_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1827_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1827_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1828: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1828_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1828_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1828_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1828_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1828_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1828_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1829: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1829_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1829_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1829_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1829_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1829_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1829_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1830: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1830_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298611111111107%"),
    top: 8
  },
  Text_I203_1830_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1830_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1830_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1830_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1830_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1831: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.936507331000428%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1832: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1832_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.63194444444445%"),
    top: 8
  },
  Text_I203_1832_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1832_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1832_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1832_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1832_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1832_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1832_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1833: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1833_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1833_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1833_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1833_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1833_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1833_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1834: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1834_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1834_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1834_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1834_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1834_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1834_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1835: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1835_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1835_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1835_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1835_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1835_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1835_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1836: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1836_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1836_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1836_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1836_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1836_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1836_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1837: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1837_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111214%"),
    top: 8
  },
  Text_I203_1837_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1837_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1837_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1837_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1837_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1838: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.873015721638993%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1839: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1839_197_14: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6319433848063127%"),
    top: 8
  },
  Text_I203_1839_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1839_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1839_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1839_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1839_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1839_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1839_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1840: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1840_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1840_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1840_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1840_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1840_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1840_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1841: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1841_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1841_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1841_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1841_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1841_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1841_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1842: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1842_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1842_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1842_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1842_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1842_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1842_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1843: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1843_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1843_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1843_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1843_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1843_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1843_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1844: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1844_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298610051472984%"),
    top: 8
  },
  Text_I203_1844_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1844_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1844_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1844_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847221162584098%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1844_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1845: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.80952411227755%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1846: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1846_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I203_1846_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1846_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1846_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1846_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1846_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1846_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1846_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1847: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1847_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1847_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1847_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1847_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1847_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1847_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1848: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1848_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1848_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1848_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1848_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1848_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1848_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1849: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1849_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1849_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1849_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1849_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1849_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1849_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1850: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1850_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1850_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1850_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1850_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1850_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1850_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1851: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1851_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111285%"),
    top: 8
  },
  Text_I203_1851_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1851_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1851_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1851_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1851_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1852: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.746031443277992%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1853: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1853_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I203_1853_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1853_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1853_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1853_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1853_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1853_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1853_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1854: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1854_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1854_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1854_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1854_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1854_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1854_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1855: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1855_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1855_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1855_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1855_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1855_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1855_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1856: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1856_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1856_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1856_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1856_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1856_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1856_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1857: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1857_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1857_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1857_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1857_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1857_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1857_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1858: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1858_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.298608991834854%"),
    top: 8
  },
  Text_I203_1858_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1858_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1858_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1858_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847220102945968%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1858_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1859: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.68254089355468%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1860: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1860_197_14: {
    flexGrow: 1,
    width: wp("5.347222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222285%"),
    top: 8
  },
  Text_I203_1860_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1860_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1860_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1860_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1860_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1860_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1860_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1861: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1861_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1861_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1861_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1861_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1861_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1861_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1862: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1862_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1862_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1862_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1862_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1862_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1862_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1863: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1863_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1863_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1863_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1863_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1863_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1863_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1864: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1864_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1864_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1864_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1864_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1864_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1864_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1865: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1865_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1865_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1865_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1865_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1865_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8472222222222285%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1865_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1866: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.61904822455512%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_203_1867: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1867_197_14: {
    flexGrow: 1,
    width: wp("5.277777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2847222222222143%"),
    top: 8
  },
  Text_I203_1867_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I203_1867_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1867_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1867_197_299: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1867_197_299_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1867_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1867_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1868: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1868_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1868_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1868_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1868_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1868_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1868_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1869: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1869_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1869_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1869_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1869_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1869_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1869_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1870: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1870_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1870_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1870_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1870_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1870_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1870_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1871: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1871_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1871_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1871_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1871_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1871_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1871_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1872: {
    width: wp("7.936507860819499%"),
    minWidth: wp("7.936507860819499%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 200,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I203_1872_197_14: {
    flexGrow: 1,
    width: wp("1.3194444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2986111111111143%"),
    top: 8
  },
  Text_I203_1872_197_14: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I203_1872_197_18: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1872_197_18_0_230: {
    flexGrow: 1,
    width: wp("7.936507860819499%"),
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_I203_1872_197_21: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.847222222222214%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I203_1872_197_21_153_138: {
    flexGrow: 1,
    width: wp("0.06944444444444445%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(5, 36, 37, 1)",
    opacity: 0.11999999731779099
  },
  View_203_1020: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 24
  },
  Text_203_1020: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_203_1021: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555556%"),
    top: 16,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I203_1021_0_2116: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 10
  },
  Text_I203_1021_0_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_173_540: {
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
  View_I173_540_153_6134: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6134_153_6159: {
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
  View_I173_540_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_540_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6134_0_892: {
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
  View_I173_540_153_6135: {
    flexGrow: 1,
    width: wp("9.305555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888886%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6135_153_6159: {
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
  View_I173_540_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_540_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6135_0_892: {
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
  View_I173_540_153_6136: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.319444444444443%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6136_153_6159: {
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
  View_I173_540_153_6136_0_890: {
    flexGrow: 1,
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_540_153_6136_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6136_0_892: {
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
  View_I173_540_153_6144: {
    flexGrow: 1,
    width: wp("8.26388888888889%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444443%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6144_153_6159: {
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
  View_I173_540_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_540_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6144_0_892: {
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
  View_I173_540_153_6147: {
    flexGrow: 1,
    width: wp("12.291666666666666%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.83333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6147_153_6159: {
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
  View_I173_540_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_540_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6147_0_892: {
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
  View_I173_540_153_6150: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.125%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6150_153_6159: {
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
  View_I173_540_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_540_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6150_0_892: {
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
  View_I173_540_153_6153: {
    flexGrow: 1,
    width: wp("13.055555555555557%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.93055555555554%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6153_153_6159: {
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
  View_I173_540_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111285%"),
    top: 15
  },
  Text_I173_540_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6153_0_892: {
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
  View_I173_540_153_6156: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.986111111111114%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I173_540_153_6156_153_6263: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I173_540_153_6156_0_897: {
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.881944444444443%"),
    top: 15
  },
  Text_I173_540_153_6156_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_540_153_6156_0_896: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I173_540_153_6156_0_896_0_342: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
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
  View_173_541: {
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
  View_I173_541_153_6108: {
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
  ImageBackground_I173_541_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I173_541_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I173_541_153_6116: {
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
  View_I173_541_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I173_541_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I173_541_153_6118: {
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
