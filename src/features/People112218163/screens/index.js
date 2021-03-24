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
      <View style={styles.View_154_1705}>
        <View style={styles.View_154_1706}>
          <View style={styles.View_154_1707}>
            <View style={styles.View_I154_1707_153_5917}>
              <View style={styles.View_I154_1707_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7903/02f5/325b81c9bf3b5e617d09b950927d16f5"
                  }}
                  style={styles.ImageBackground_I154_1707_153_5900}
                />
                <View style={styles.View_I154_1707_153_5941} />
              </View>
              <View style={styles.View_I154_1707_153_5902}>
                <View style={styles.View_I154_1707_153_5903}>
                  <View style={styles.View_I154_1707_153_5904}>
                    <Text style={styles.Text_I154_1707_153_5904}>
                      St. Xaviers International School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_1707_153_5905}
                  />
                </View>
                <View style={styles.View_I154_1707_153_5906}>
                  <Text style={styles.Text_I154_1707_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_1707_153_5907}>
              <View style={styles.View_I154_1707_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_1707_153_5908_138_29}
                />
                <View style={styles.View_I154_1707_153_5908_0_2104}>
                  <Text style={styles.Text_I154_1707_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_1707_153_5909}>
                <View style={styles.View_I154_1707_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_1708}>
            <View style={styles.View_I154_1708_153_5917}>
              <View style={styles.View_I154_1708_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/1d08/fd05ce73338cdc06ce30a758f6877709"
                  }}
                  style={styles.ImageBackground_I154_1708_153_6015}
                />
                <View style={styles.View_I154_1708_153_5941} />
              </View>
              <View style={styles.View_I154_1708_153_5902}>
                <View style={styles.View_I154_1708_153_5903}>
                  <View style={styles.View_I154_1708_153_5904}>
                    <Text style={styles.Text_I154_1708_153_5904}>
                      Eddison High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_1708_153_5905}
                  />
                </View>
                <View style={styles.View_I154_1708_153_5906}>
                  <Text style={styles.Text_I154_1708_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_1708_153_5907}>
              <View style={styles.View_I154_1708_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_1708_153_5908_138_29}
                />
                <View style={styles.View_I154_1708_153_5908_0_2104}>
                  <Text style={styles.Text_I154_1708_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_1708_153_5909}>
                <View style={styles.View_I154_1708_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_1709}>
            <View style={styles.View_I154_1709_153_5917}>
              <View style={styles.View_I154_1709_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af67/117d/8d4cd89e9f6ce367d7d61b2ea51406b2"
                  }}
                  style={styles.ImageBackground_I154_1709_153_6014}
                />
                <View style={styles.View_I154_1709_153_5941} />
              </View>
              <View style={styles.View_I154_1709_153_5902}>
                <View style={styles.View_I154_1709_153_5903}>
                  <View style={styles.View_I154_1709_153_5904}>
                    <Text style={styles.Text_I154_1709_153_5904}>
                      Hayden High School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_1709_153_5905}
                  />
                </View>
                <View style={styles.View_I154_1709_153_5906}>
                  <Text style={styles.Text_I154_1709_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_1709_153_5907}>
              <View style={styles.View_I154_1709_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_1709_153_5908_138_29}
                />
                <View style={styles.View_I154_1709_153_5908_0_2104}>
                  <Text style={styles.Text_I154_1709_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_1709_153_5909}>
                <View style={styles.View_I154_1709_153_5909_0_230} />
              </View>
            </View>
          </View>
          <View style={styles.View_154_1710}>
            <View style={styles.View_I154_1710_153_5917}>
              <View style={styles.View_I154_1710_153_5898}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8972/e914/65054b94bccb629d56b54c9d963beb79"
                  }}
                  style={styles.ImageBackground_I154_1710_153_5899}
                />
                <View style={styles.View_I154_1710_153_5941} />
              </View>
              <View style={styles.View_I154_1710_153_5902}>
                <View style={styles.View_I154_1710_153_5903}>
                  <View style={styles.View_I154_1710_153_5904}>
                    <Text style={styles.Text_I154_1710_153_5904}>
                      St. Andrews Public School
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
                    }}
                    style={styles.ImageBackground_I154_1710_153_5905}
                  />
                </View>
                <View style={styles.View_I154_1710_153_5906}>
                  <Text style={styles.Text_I154_1710_153_5906}>
                    4 Sections | 12 Rooms
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I154_1710_153_5907}>
              <View style={styles.View_I154_1710_153_5908}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/aaa7/eb1ec069a6553d1137e9eb2ded509a9a"
                  }}
                  style={styles.ImageBackground_I154_1710_153_5908_138_29}
                />
                <View style={styles.View_I154_1710_153_5908_0_2104}>
                  <Text style={styles.Text_I154_1710_153_5908_0_2104}>
                    show details
                  </Text>
                </View>
              </View>
              <View style={styles.View_I154_1710_153_5909}>
                <View style={styles.View_I154_1710_153_5909_0_230} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_190_120}>
          <View style={styles.View_I190_120_153_130}>
            <View style={styles.View_I190_120_153_130_0_230} />
          </View>
          <View style={styles.View_I190_120_189_362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4140/36ac/7f9165dee82ee12cd852e3fc36def21e"
              }}
              style={styles.ImageBackground_I190_120_189_362_138_29}
            />
            <View style={styles.View_I190_120_189_362_0_2104}>
              <Text style={styles.Text_I190_120_189_362_0_2104}>Building</Text>
            </View>
          </View>
          <View style={styles.View_I190_120_186_25}>
            <View style={styles.View_I190_120_189_292}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ba/0353/1ad1ebc1cdf5e76c24e13355400bfd0f"
                }}
                style={styles.ImageBackground_I190_120_153_132}
              />
            </View>
            <View style={styles.View_I190_120_153_136}>
              <View style={styles.View_I190_120_153_14}>
                <Text style={styles.Text_I190_120_153_14}>John Doe</Text>
              </View>
              <View style={styles.View_I190_120_153_1}>
                <Text style={styles.Text_I190_120_153_1}>Buildings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I190_120_139_759}>
            <View style={styles.View_I190_120_139_761} />
            <View style={styles.View_I190_120_139_760}>
              <Text style={styles.Text_I190_120_139_760}>leaning Services</Text>
            </View>
            <View style={styles.View_I190_120_189_305}>
              <Text style={styles.Text_I190_120_189_305}>C</Text>
            </View>
          </View>
          <View style={styles.View_I190_120_229_3960}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d47/be42/71b2250145b30cafefd53e98eeea9aed"
              }}
              style={styles.ImageBackground_I190_120_229_2631}
            />
            <View style={styles.View_I190_120_229_1982}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I190_120_229_1982_229_1973}
              />
              <View style={styles.View_I190_120_229_1982_229_1975}>
                <View style={styles.View_I190_120_229_1982_229_1976}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
                    }}
                    style={styles.ImageBackground_I190_120_229_1982_229_1977}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/7fe2/365b4b343b5ff418e14e7472be5ba8c5"
                    }}
                    style={styles.ImageBackground_I190_120_229_1982_229_1979}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_173_297}>
        <View style={styles.View_I173_297_153_138} />
      </View>
      <View style={styles.View_154_1720}>
        <View style={styles.View_154_1742}>
          <View style={styles.View_214_278}>
            <View style={styles.View_214_205}>
              <View style={styles.View_214_387}>
                <View style={styles.View_I214_387_76_9833}>
                  <Text style={styles.Text_I214_387_76_9833}>Abe Doe</Text>
                </View>
              </View>
              <View style={styles.View_214_388}>
                <View style={styles.View_I214_388_76_9833}>
                  <Text style={styles.Text_I214_388_76_9833}>Aaron Dmello</Text>
                </View>
              </View>
              <View style={styles.View_214_389}>
                <View style={styles.View_I214_389_76_9833}>
                  <Text style={styles.Text_I214_389_76_9833}>Akash Singh</Text>
                </View>
              </View>
              <View style={styles.View_214_390}>
                <View style={styles.View_I214_390_76_9833}>
                  <Text style={styles.Text_I214_390_76_9833}>Avi Bale</Text>
                </View>
              </View>
              <View style={styles.View_214_391}>
                <View style={styles.View_I214_391_76_9833}>
                  <Text style={styles.Text_I214_391_76_9833}>Bishan Gupta</Text>
                </View>
              </View>
              <View style={styles.View_214_392}>
                <View style={styles.View_I214_392_76_9833}>
                  <Text style={styles.Text_I214_392_76_9833}>Bonnie Smith</Text>
                </View>
              </View>
              <View style={styles.View_214_393}>
                <View style={styles.View_I214_393_76_9833}>
                  <Text style={styles.Text_I214_393_76_9833}>
                    Bueran Hendricks
                  </Text>
                </View>
              </View>
              <View style={styles.View_214_394}>
                <View style={styles.View_I214_394_76_9833}>
                  <Text style={styles.Text_I214_394_76_9833}>Bunny Reagan</Text>
                </View>
              </View>
              <View style={styles.View_214_395}>
                <View style={styles.View_I214_395_76_9833}>
                  <Text style={styles.Text_I214_395_76_9833}>Chirag Kumar</Text>
                </View>
              </View>
              <View style={styles.View_214_396}>
                <View style={styles.View_I214_396_76_9833}>
                  <Text style={styles.Text_I214_396_76_9833}>
                    Chad Fanning{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.View_214_397}>
                <View style={styles.View_I214_397_76_9833}>
                  <Text style={styles.Text_I214_397_76_9833}>Chris Morris</Text>
                </View>
              </View>
              <View style={styles.View_214_398}>
                <View style={styles.View_I214_398_76_9833}>
                  <Text style={styles.Text_I214_398_76_9833}>
                    Dominic D’Silva{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.View_214_399}>
                <View style={styles.View_I214_399_76_9833}>
                  <Text style={styles.Text_I214_399_76_9833}>Dom Bess</Text>
                </View>
              </View>
              <View style={styles.View_214_400}>
                <View style={styles.View_I214_400_76_9833}>
                  <Text style={styles.Text_I214_400_76_9833}>
                    Derrick Gomez
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_262_323}>
              <View style={styles.View_I262_323_0_909}>
                <View style={styles.View_I262_323_0_909_153_6263}>
                  <View style={styles.View_I262_323_0_909_0_897}>
                    <Text style={styles.Text_I262_323_0_909_0_897}>
                      Cleaners
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I262_323_0_909_0_896}>
                  <View style={styles.View_I262_323_0_909_0_896_0_342} />
                </View>
              </View>
              <View style={styles.View_I262_323_0_905}>
                <View style={styles.View_I262_323_0_905_153_6159}>
                  <View style={styles.View_I262_323_0_905_0_890}>
                    <Text style={styles.Text_I262_323_0_905_0_890}>
                      supervisors
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I262_323_0_905_0_892} />
              </View>
            </View>
          </View>
          <View style={styles.View_214_276}>
            <View style={styles.View_I214_276_153_138} />
          </View>
          <View style={styles.View_214_419}>
            <View style={styles.View_214_420}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/651a/355f/c98f0e7ef8e6c21a03884e0073ec2a57"
                }}
                style={styles.ImageBackground_214_752}
              />
              <View style={styles.View_214_456}>
                <Text style={styles.Text_214_456}>
                  Select a cleaner/supervisor to view details
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_173_295}>
          <View style={styles.View_I173_295_196_1177}>
            <View style={styles.View_I173_295_196_1177_153_6159}>
              <View style={styles.View_I173_295_196_1177_0_890}>
                <Text style={styles.Text_I173_295_196_1177_0_890}>
                  overview
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_295_196_1177_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6134}>
            <View style={styles.View_I173_295_153_6134_153_6159}>
              <View style={styles.View_I173_295_153_6134_0_890}>
                <Text style={styles.Text_I173_295_153_6134_0_890}>reports</Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6134_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6135}>
            <View style={styles.View_I173_295_153_6135_153_6159}>
              <View style={styles.View_I173_295_153_6135_0_890}>
                <Text style={styles.Text_I173_295_153_6135_0_890}>
                  Inspections
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6135_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6136}>
            <View style={styles.View_I173_295_153_6136_153_6263}>
              <View style={styles.View_I173_295_153_6136_0_897}>
                <Text style={styles.Text_I173_295_153_6136_0_897}>People</Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6136_0_896}>
              <View style={styles.View_I173_295_153_6136_0_896_0_342} />
            </View>
          </View>
          <View style={styles.View_I173_295_153_6144}>
            <View style={styles.View_I173_295_153_6144_153_6159}>
              <View style={styles.View_I173_295_153_6144_0_890}>
                <Text style={styles.Text_I173_295_153_6144_0_890}>
                  Budgeting
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6144_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6147}>
            <View style={styles.View_I173_295_153_6147_153_6159}>
              <View style={styles.View_I173_295_153_6147_0_890}>
                <Text style={styles.Text_I173_295_153_6147_0_890}>
                  products needed
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6147_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6150}>
            <View style={styles.View_I173_295_153_6150_153_6159}>
              <View style={styles.View_I173_295_153_6150_0_890}>
                <Text style={styles.Text_I173_295_153_6150_0_890}>savings</Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6150_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6153}>
            <View style={styles.View_I173_295_153_6153_153_6159}>
              <View style={styles.View_I173_295_153_6153_0_890}>
                <Text style={styles.Text_I173_295_153_6153_0_890}>
                  cleaning methods
                </Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6153_0_892} />
          </View>
          <View style={styles.View_I173_295_153_6156}>
            <View style={styles.View_I173_295_153_6156_153_6159}>
              <View style={styles.View_I173_295_153_6156_0_890}>
                <Text style={styles.Text_I173_295_153_6156_0_890}>sds</Text>
              </View>
            </View>
            <View style={styles.View_I173_295_153_6156_0_892} />
          </View>
        </View>
        <View style={styles.View_173_296}>
          <View style={styles.View_I173_296_153_6108}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1d/9d9c/5370c46c011a806fa366193a73211c5e"
              }}
              style={styles.ImageBackground_I173_296_153_6113}
            />
            <View style={styles.View_I173_296_153_6114} />
          </View>
          <View style={styles.View_I173_296_153_6116}>
            <View style={styles.View_I173_296_153_6117}>
              <Text style={styles.Text_I173_296_153_6117}>
                Eddison High School
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4a9/a1dc/19f933b1d9bc8718cc6e2496fb2d6c41"
              }}
              style={styles.ImageBackground_I173_296_153_6118}
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
  View_154_1705: {
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
  View_154_1706: {
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
  View_154_1707: {
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
  View_I154_1707_153_5917: {
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
  View_I154_1707_153_5898: {
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
  ImageBackground_I154_1707_153_5900: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_1707_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_1707_153_5902: {
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
  View_I154_1707_153_5903: {
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
  View_I154_1707_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_1707_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_1707_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_1707_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_1707_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1707_153_5907: {
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
  View_I154_1707_153_5908: {
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
  ImageBackground_I154_1707_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_1707_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_1707_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_1707_153_5909: {
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
  View_I154_1707_153_5909_0_230: {
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
  View_154_1708: {
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
  View_I154_1708_153_5917: {
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
  View_I154_1708_153_5898: {
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
  ImageBackground_I154_1708_153_6015: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_1708_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_1708_153_5902: {
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
  View_I154_1708_153_5903: {
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
  View_I154_1708_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_1708_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_1708_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_1708_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_1708_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1708_153_5907: {
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
  View_I154_1708_153_5908: {
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
  ImageBackground_I154_1708_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_1708_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_1708_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_1708_153_5909: {
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
  View_I154_1708_153_5909_0_230: {
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
  View_154_1709: {
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
  View_I154_1709_153_5917: {
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
  View_I154_1709_153_5898: {
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
  ImageBackground_I154_1709_153_6014: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_1709_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_1709_153_5902: {
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
  View_I154_1709_153_5903: {
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
  View_I154_1709_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_1709_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_1709_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_1709_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_1709_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1709_153_5907: {
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
  View_I154_1709_153_5908: {
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
  ImageBackground_I154_1709_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_1709_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_1709_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_1709_153_5909: {
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
  View_I154_1709_153_5909_0_230: {
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
  View_154_1710: {
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
  View_I154_1710_153_5917: {
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
  View_I154_1710_153_5898: {
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
  ImageBackground_I154_1710_153_5899: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I154_1710_153_5941: {
    width: wp("26.944444444444443%"),
    height: 192,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I154_1710_153_5902: {
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
  View_I154_1710_153_5903: {
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
  View_I154_1710_153_5904: {
    width: wp("22.77777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I154_1710_153_5904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_I154_1710_153_5905: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  View_I154_1710_153_5906: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 68
  },
  Text_I154_1710_153_5906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_I154_1710_153_5907: {
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
  View_I154_1710_153_5908: {
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
  ImageBackground_I154_1710_153_5908_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333333%"),
    top: 8
  },
  View_I154_1710_153_5908_0_2104: {
    flexGrow: 1,
    width: wp("7.777777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: 10
  },
  Text_I154_1710_153_5908_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I154_1710_153_5909: {
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
  View_I154_1710_153_5909_0_230: {
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
  View_190_120: {
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
  View_I190_120_153_130: {
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
  View_I190_120_153_130_0_230: {
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
  View_I190_120_189_362: {
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
  ImageBackground_I190_120_189_362_138_29: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: 8
  },
  View_I190_120_189_362_0_2104: {
    flexGrow: 1,
    width: wp("4.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: 10
  },
  Text_I190_120_189_362_0_2104: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I190_120_186_25: {
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
  View_I190_120_189_292: {
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
  ImageBackground_I190_120_153_132: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_120_153_136: {
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
  View_I190_120_153_14: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I190_120_153_14: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I190_120_153_1: {
    width: wp("6.944444444444445%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 30
  },
  Text_I190_120_153_1: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_I190_120_139_759: {
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
  View_I190_120_139_761: {
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
  View_I190_120_139_760: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111107%"),
    top: 0
  },
  Text_I190_120_139_760: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_120_189_305: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666663%"),
    top: 0
  },
  Text_I190_120_189_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  View_I190_120_229_3960: {
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
  ImageBackground_I190_120_229_2631: {
    width: wp("2.5%"),
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I190_120_229_1982: {
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
  View_I190_120_229_1982_229_1973: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I190_120_229_1982_229_1975: {
    flexGrow: 1,
    width: wp("1.1111111111111112%"),
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.277777777777775%"),
    top: 4
  },
  View_I190_120_229_1982_229_1976: {
    width: wp("1.1111111111111112%"),
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I190_120_229_1982_229_1977: {
    width: wp("0.5555555555555556%"),
    height: 8,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_I190_120_229_1982_229_1979: {
    width: wp("1.1111111111111112%"),
    height: 7,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_297: {
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
  View_I173_297_153_138: {
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
  View_154_1720: {
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
  View_154_1742: {
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
  View_214_278: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 748,
    minHeight: 748,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_205: {
    flexGrow: 1,
    width: wp("28.194444444444443%"),
    height: 740,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 56,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_387: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 8,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_387_76_9833: {
    flexGrow: 1,
    width: wp("4.305555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_387_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_388: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 64,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_388_76_9833: {
    flexGrow: 1,
    width: wp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_388_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_389: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_389_76_9833: {
    flexGrow: 1,
    width: wp("6.319444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_389_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_390: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 176,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_390_76_9833: {
    flexGrow: 1,
    width: wp("4.097222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_390_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_391: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 232,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_391_76_9833: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_391_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_392: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 288,
    backgroundColor: "rgba(180, 219, 219, 1)",
    overflow: "hidden"
  },
  View_I214_392_76_9833: {
    flexGrow: 1,
    width: wp("6.805555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_392_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_393: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 344,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_393_76_9833: {
    flexGrow: 1,
    width: wp("9.027777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_393_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_394: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 400,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_394_76_9833: {
    flexGrow: 1,
    width: wp("7.291666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_394_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_395: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 456,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_395_76_9833: {
    flexGrow: 1,
    width: wp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_395_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_396: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 512,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_396_76_9833: {
    flexGrow: 1,
    width: wp("7.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_396_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_397: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 568,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_397_76_9833: {
    flexGrow: 1,
    width: wp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_397_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_398: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 624,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_398_76_9833: {
    flexGrow: 1,
    width: wp("7.916666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_398_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_399: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 680,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_399_76_9833: {
    flexGrow: 1,
    width: wp("5.208333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_399_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_214_400: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 736,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I214_400_76_9833: {
    flexGrow: 1,
    width: wp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: 16
  },
  Text_I214_400_76_9833: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_262_323: {
    flexGrow: 1,
    width: wp("28.194444444444443%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 8,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_323_0_909: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_323_0_909_153_6263: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_323_0_909_0_897: {
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3402777777777715%"),
    top: 15
  },
  Text_I262_323_0_909_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I262_323_0_909_0_896: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_I262_323_0_909_0_896_0_342: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I262_323_0_905: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.097222222222221%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_323_0_905_153_6159: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_323_0_905_0_890: {
    flexGrow: 1,
    width: wp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4375%"),
    top: 15
  },
  Text_I262_323_0_905_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I262_323_0_905_0_892: {
    flexGrow: 1,
    width: wp("14.097222222222221%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(5, 36, 37, 0.11999999731779099)"
  },
  View_214_276: {
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
  View_I214_276_153_138: {
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
  View_214_419: {
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
  View_214_420: {
    width: wp("26.041666666666668%"),
    height: 290.0008544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.263888888888893%"),
    top: 253,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_214_752: {
    width: wp("22.22222222222222%"),
    height: 230.00086975097656,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9097222222222285%")
  },
  View_214_456: {
    width: wp("26.041666666666668%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 262.0009765625
  },
  Text_214_456: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.18000000715255737,
    textTransform: "none"
  },
  View_173_295: {
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
  View_I173_295_196_1177: {
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
  View_I173_295_196_1177_153_6159: {
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
  View_I173_295_196_1177_0_890: {
    flexGrow: 1,
    width: wp("5.416666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_295_196_1177_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_196_1177_0_892: {
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
  View_I173_295_153_6134: {
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
  View_I173_295_153_6134_153_6159: {
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
  View_I173_295_153_6134_0_890: {
    flexGrow: 1,
    width: wp("4.791666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_295_153_6134_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6134_0_892: {
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
  View_I173_295_153_6135: {
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
  View_I173_295_153_6135_153_6159: {
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
  View_I173_295_153_6135_0_890: {
    flexGrow: 1,
    width: wp("7.083333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_295_153_6135_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6135_0_892: {
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
  View_I173_295_153_6136: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.95833333333333%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I173_295_153_6136_153_6263: {
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
  View_I173_295_153_6136_0_897: {
    width: wp("4.027777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_295_153_6136_0_897: {
    color: "rgba(19, 97, 98, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6136_0_896: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(19, 97, 98, 1)"
  },
  View_I173_295_153_6136_0_896_0_342: {
    flexGrow: 1,
    width: wp("6.25%"),
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
  View_I173_295_153_6144: {
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
  View_I173_295_153_6144_153_6159: {
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
  View_I173_295_153_6144_0_890: {
    flexGrow: 1,
    width: wp("6.041666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: 15
  },
  Text_I173_295_153_6144_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6144_0_892: {
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
  View_I173_295_153_6147: {
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
  View_I173_295_153_6147_153_6159: {
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
  View_I173_295_153_6147_0_890: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I173_295_153_6147_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6147_0_892: {
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
  View_I173_295_153_6150: {
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
  View_I173_295_153_6150_153_6159: {
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
  View_I173_295_153_6150_0_890: {
    flexGrow: 1,
    width: wp("4.583333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_295_153_6150_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6150_0_892: {
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
  View_I173_295_153_6153: {
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
  View_I173_295_153_6153_153_6159: {
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
  View_I173_295_153_6153_0_890: {
    flexGrow: 1,
    width: wp("10.833333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 15
  },
  Text_I173_295_153_6153_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6153_0_892: {
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
  View_I173_295_153_6156: {
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
  View_I173_295_153_6156_153_6159: {
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
  View_I173_295_153_6156_0_890: {
    flexGrow: 1,
    width: wp("2.013888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%"),
    top: 15
  },
  Text_I173_295_153_6156_0_890: {
    color: "rgba(5, 36, 37, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I173_295_153_6156_0_892: {
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
  View_173_296: {
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
  View_I173_296_153_6108: {
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
  ImageBackground_I173_296_153_6113: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I173_296_153_6114: {
    width: wp("70.76388888888889%"),
    height: 180,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I173_296_153_6116: {
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
  View_I173_296_153_6117: {
    width: wp("65.76388888888889%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_I173_296_153_6117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I173_296_153_6118: {
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
