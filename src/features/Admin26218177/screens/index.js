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
      <View style={styles.View_153_688}>
        <View style={styles.View_153_689}>
          <View style={styles.View_153_812}>
            <View style={styles.View_I153_812_138_1078}>
              <View style={styles.View_I153_812_138_1072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I153_812_138_1072_138_29}
                />
                <View style={styles.View_I153_812_138_1072_0_2104}>
                  <Text style={styles.Text_I153_812_138_1072_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I153_812_139_94}>
                <View style={styles.View_I153_812_139_94_0_230} />
              </View>
            </View>
            <View style={styles.View_I153_812_137_22}>
              <View style={styles.View_I153_812_137_14}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I153_812_137_15}
                />
                <View style={styles.View_I153_812_137_17}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d7/ee16/6681a72031ebe6b800476007314fd40f"
                    }}
                    style={styles.ImageBackground_I153_812_137_18}
                  />
                </View>
              </View>
              <View style={styles.View_I153_812_137_8}>
                <Text style={styles.Text_I153_812_137_8}>E1024</Text>
              </View>
            </View>
            <View style={styles.View_I153_812_137_7}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582e/5f36/b154b3a9cd3d83203a248e5cec923b71"
                }}
                style={styles.ImageBackground_I153_812_137_0}
              />
              <View style={styles.View_I153_812_136_12}>
                <Text style={styles.Text_I153_812_136_12}>9876543210</Text>
              </View>
            </View>
            <View style={styles.View_I153_812_137_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/a5d7/0ac329cafdbecfbd144972b4e14b3c3e"
                }}
                style={styles.ImageBackground_I153_812_136_13}
              />
              <View style={styles.View_I153_812_136_11}>
                <Text style={styles.Text_I153_812_136_11}>
                  johndoe21@example.com
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65df/d855/51303c20c02d44d21c8fd68191e71d39"
              }}
              style={styles.ImageBackground_I153_812_137_11}
            />
            <View style={styles.View_I153_812_136_3}>
              <Text style={styles.Text_I153_812_136_3}>John Doe</Text>
            </View>
          </View>
          <View style={styles.View_153_813}>
            <View style={styles.View_I153_813_138_1078}>
              <View style={styles.View_I153_813_138_1072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I153_813_138_1072_138_29}
                />
                <View style={styles.View_I153_813_138_1072_0_2104}>
                  <Text style={styles.Text_I153_813_138_1072_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I153_813_139_94}>
                <View style={styles.View_I153_813_139_94_0_230} />
              </View>
            </View>
            <View style={styles.View_I153_813_137_22}>
              <View style={styles.View_I153_813_137_14}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I153_813_137_15}
                />
                <View style={styles.View_I153_813_137_17}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d7/ee16/6681a72031ebe6b800476007314fd40f"
                    }}
                    style={styles.ImageBackground_I153_813_137_18}
                  />
                </View>
              </View>
              <View style={styles.View_I153_813_137_8}>
                <Text style={styles.Text_I153_813_137_8}>E1022</Text>
              </View>
            </View>
            <View style={styles.View_I153_813_137_7}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582e/5f36/b154b3a9cd3d83203a248e5cec923b71"
                }}
                style={styles.ImageBackground_I153_813_137_0}
              />
              <View style={styles.View_I153_813_136_12}>
                <Text style={styles.Text_I153_813_136_12}>9876543210</Text>
              </View>
            </View>
            <View style={styles.View_I153_813_137_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/a5d7/0ac329cafdbecfbd144972b4e14b3c3e"
                }}
                style={styles.ImageBackground_I153_813_136_13}
              />
              <View style={styles.View_I153_813_136_11}>
                <Text style={styles.Text_I153_813_136_11}>
                  jimdoe12@example.com
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65df/d855/51303c20c02d44d21c8fd68191e71d39"
              }}
              style={styles.ImageBackground_I153_813_137_11}
            />
            <View style={styles.View_I153_813_136_3}>
              <Text style={styles.Text_I153_813_136_3}>Jim Doe</Text>
            </View>
          </View>
          <View style={styles.View_153_814}>
            <View style={styles.View_I153_814_138_1078}>
              <View style={styles.View_I153_814_138_1072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I153_814_138_1072_138_29}
                />
                <View style={styles.View_I153_814_138_1072_0_2104}>
                  <Text style={styles.Text_I153_814_138_1072_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I153_814_139_94}>
                <View style={styles.View_I153_814_139_94_0_230} />
              </View>
            </View>
            <View style={styles.View_I153_814_137_22}>
              <View style={styles.View_I153_814_137_14}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I153_814_137_15}
                />
                <View style={styles.View_I153_814_137_17}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d7/ee16/6681a72031ebe6b800476007314fd40f"
                    }}
                    style={styles.ImageBackground_I153_814_137_18}
                  />
                </View>
              </View>
              <View style={styles.View_I153_814_137_8}>
                <Text style={styles.Text_I153_814_137_8}>E1016</Text>
              </View>
            </View>
            <View style={styles.View_I153_814_137_7}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582e/5f36/b154b3a9cd3d83203a248e5cec923b71"
                }}
                style={styles.ImageBackground_I153_814_137_0}
              />
              <View style={styles.View_I153_814_136_12}>
                <Text style={styles.Text_I153_814_136_12}>9876543210</Text>
              </View>
            </View>
            <View style={styles.View_I153_814_137_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/a5d7/0ac329cafdbecfbd144972b4e14b3c3e"
                }}
                style={styles.ImageBackground_I153_814_136_13}
              />
              <View style={styles.View_I153_814_136_11}>
                <Text style={styles.Text_I153_814_136_11}>
                  johnwick36@example.com
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65df/d855/51303c20c02d44d21c8fd68191e71d39"
              }}
              style={styles.ImageBackground_I153_814_137_11}
            />
            <View style={styles.View_I153_814_136_3}>
              <Text style={styles.Text_I153_814_136_3}>John Wick</Text>
            </View>
          </View>
          <View style={styles.View_153_815}>
            <View style={styles.View_I153_815_138_1078}>
              <View style={styles.View_I153_815_138_1072}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I153_815_138_1072_138_29}
                />
                <View style={styles.View_I153_815_138_1072_0_2104}>
                  <Text style={styles.Text_I153_815_138_1072_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I153_815_139_94}>
                <View style={styles.View_I153_815_139_94_0_230} />
              </View>
            </View>
            <View style={styles.View_I153_815_137_22}>
              <View style={styles.View_I153_815_137_14}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I153_815_137_15}
                />
                <View style={styles.View_I153_815_137_17}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d7/ee16/6681a72031ebe6b800476007314fd40f"
                    }}
                    style={styles.ImageBackground_I153_815_137_18}
                  />
                </View>
              </View>
              <View style={styles.View_I153_815_137_8}>
                <Text style={styles.Text_I153_815_137_8}>E1008</Text>
              </View>
            </View>
            <View style={styles.View_I153_815_137_7}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582e/5f36/b154b3a9cd3d83203a248e5cec923b71"
                }}
                style={styles.ImageBackground_I153_815_137_0}
              />
              <View style={styles.View_I153_815_136_12}>
                <Text style={styles.Text_I153_815_136_12}>9876543210</Text>
              </View>
            </View>
            <View style={styles.View_I153_815_137_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/a5d7/0ac329cafdbecfbd144972b4e14b3c3e"
                }}
                style={styles.ImageBackground_I153_815_136_13}
              />
              <View style={styles.View_I153_815_136_11}>
                <Text style={styles.Text_I153_815_136_11}>
                  georgejonas@example.com
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65df/d855/51303c20c02d44d21c8fd68191e71d39"
              }}
              style={styles.ImageBackground_I153_815_137_11}
            />
            <View style={styles.View_I153_815_136_3}>
              <Text style={styles.Text_I153_815_136_3}>George Jonas</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_186_13}>
          <View style={styles.View_I186_13_153_130}>
            <View style={styles.View_I186_13_153_130_0_230} />
          </View>
          <View style={styles.View_I186_13_186_25}>
            <View style={styles.View_I186_13_153_136}>
              <View style={styles.View_I186_13_153_1}>
                <Text style={styles.Text_I186_13_153_1}>Administrators</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I186_13_139_759}>
            <View style={styles.View_I186_13_139_761} />
            <View style={styles.View_I186_13_139_760}>
              <Text style={styles.Text_I186_13_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I186_13_189_305}>
              <Text style={styles.Text_I186_13_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I186_13_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I186_13_229_2631}
            />
            <View style={styles.View_I186_13_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I186_13_229_1982_229_1973}
              />
              <View style={styles.View_I186_13_229_1982_229_1975}>
                <View style={styles.View_I186_13_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I186_13_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I186_13_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_181_127}>
        <View style={styles.View_I181_127_153_138} />
      </View>
      <View style={styles.View_153_708}>
        <View style={styles.View_154_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d618/e6b2/e18ba6b0c976207a5ed905742384bfb1"
            }}
            style={styles.ImageBackground_154_1}
          />
          <View style={styles.View_154_24}>
            <Text style={styles.Text_154_24}>
              Select an administrator to view details
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_153_688: {
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
  View_153_689: {
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
  View_153_812: {
    width: wp("26.944444444444443%"),
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I153_812_138_1078: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 172,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_812_138_1072: {
    flexGrow: 1,
    width: wp("26.38888888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_812_138_1072_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333335%"),
    top: 8
  },
  View_I153_812_138_1072_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I153_812_138_1072_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I153_812_139_94: {
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
  View_I153_812_139_94_0_230: {
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
  View_I153_812_137_22: {
    flexGrow: 1,
    width: wp("5.763888888888889%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_812_137_14: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_812_137_15: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_812_137_17: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%")
  },
  ImageBackground_I153_812_137_18: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_812_137_8: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_812_137_8: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_812_137_7: {
    flexGrow: 1,
    width: wp("8.958333333333334%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 96,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_812_137_0: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_812_136_12: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_812_136_12: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_812_137_6: {
    flexGrow: 1,
    width: wp("15.625%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_812_136_13: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_812_136_11: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_812_136_11: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I153_812_137_11: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: 20
  },
  View_I153_812_136_3: {
    flexGrow: 1,
    width: wp("5.972222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 20
  },
  Text_I153_812_136_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_153_813: {
    width: wp("26.944444444444443%"),
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 252,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I153_813_138_1078: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 172,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_813_138_1072: {
    flexGrow: 1,
    width: wp("26.38888888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_813_138_1072_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333335%"),
    top: 8
  },
  View_I153_813_138_1072_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I153_813_138_1072_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I153_813_139_94: {
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
  View_I153_813_139_94_0_230: {
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
  View_I153_813_137_22: {
    flexGrow: 1,
    width: wp("5.763888888888889%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_813_137_14: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_813_137_15: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_813_137_17: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%")
  },
  ImageBackground_I153_813_137_18: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_813_137_8: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_813_137_8: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_813_137_7: {
    flexGrow: 1,
    width: wp("8.958333333333334%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 96,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_813_137_0: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_813_136_12: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_813_136_12: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_813_137_6: {
    flexGrow: 1,
    width: wp("15%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_813_136_13: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_813_136_11: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_813_136_11: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I153_813_137_11: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: 20
  },
  View_I153_813_136_3: {
    flexGrow: 1,
    width: wp("5.208333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 20
  },
  Text_I153_813_136_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_153_814: {
    width: wp("26.944444444444443%"),
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 488,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I153_814_138_1078: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 172,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_814_138_1072: {
    flexGrow: 1,
    width: wp("26.38888888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_814_138_1072_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333335%"),
    top: 8
  },
  View_I153_814_138_1072_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I153_814_138_1072_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I153_814_139_94: {
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
  View_I153_814_139_94_0_230: {
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
  View_I153_814_137_22: {
    flexGrow: 1,
    width: wp("5.763888888888889%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_814_137_14: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_814_137_15: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_814_137_17: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%")
  },
  ImageBackground_I153_814_137_18: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_814_137_8: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_814_137_8: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_814_137_7: {
    flexGrow: 1,
    width: wp("8.958333333333334%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 96,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_814_137_0: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_814_136_12: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_814_136_12: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_814_137_6: {
    flexGrow: 1,
    width: wp("16.041666666666668%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_814_136_13: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_814_136_11: {
    width: wp("13.541666666666666%"),
    minWidth: wp("13.541666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_814_136_11: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I153_814_137_11: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: 20
  },
  View_I153_814_136_3: {
    flexGrow: 1,
    width: wp("6.597222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 20
  },
  Text_I153_814_136_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_153_815: {
    width: wp("26.944444444444443%"),
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 724,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I153_815_138_1078: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 172,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_815_138_1072: {
    flexGrow: 1,
    width: wp("26.38888888888889%"),
    height: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_815_138_1072_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333335%"),
    top: 8
  },
  View_I153_815_138_1072_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I153_815_138_1072_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I153_815_139_94: {
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
  View_I153_815_139_94_0_230: {
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
  View_I153_815_137_22: {
    flexGrow: 1,
    width: wp("5.763888888888889%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 132,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_815_137_14: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I153_815_137_15: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_815_137_17: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333348%")
  },
  ImageBackground_I153_815_137_18: {
    width: wp("1.3888888888888888%"),
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_815_137_8: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_815_137_8: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_815_137_7: {
    flexGrow: 1,
    width: wp("8.958333333333334%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 96,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_815_137_0: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_815_136_12: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_815_136_12: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I153_815_137_6: {
    flexGrow: 1,
    width: wp("16.59722222222222%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I153_815_136_13: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_815_136_11: {
    width: wp("14.097222222222221%"),
    minWidth: wp("14.097222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 0
  },
  Text_I153_815_136_11: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I153_815_137_11: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: 20
  },
  View_I153_815_136_3: {
    flexGrow: 1,
    width: wp("8.819444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 20
  },
  Text_I153_815_136_3: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_186_13: {
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
  View_I186_13_153_130: {
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
  View_I186_13_153_130_0_230: {
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
  View_I186_13_186_25: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 136,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_13_153_136: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_13_153_1: {
    width: wp("11.180555555555555%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I186_13_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I186_13_139_759: {
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
  View_I186_13_139_761: {
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
  View_I186_13_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I186_13_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I186_13_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I186_13_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I186_13_229_3960: {
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
  ImageBackground_I186_13_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I186_13_229_1982: {
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
  View_I186_13_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I186_13_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I186_13_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I186_13_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I186_13_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_181_127: {
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
  View_I181_127_153_138: {
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
  View_153_708: {
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
  View_154_0: {
    width: wp("23.541666666666668%"),
    height: 342.7272644042969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.611111111111107%"),
    top: 341,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_154_1: {
    width: wp("22.22222222222222%"),
    height: 282.7272644042969,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6597222222222285%")
  },
  View_154_24: {
    width: wp("23.541666666666668%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 314.727294921875
  },
  Text_154_24: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
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
