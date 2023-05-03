import React from 'react';
import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons'

import {colors} from '../../theme'
import BookCount from "./BookCount";
import Button from "../buttons/Button"
import CustomActionButton from "../buttons/CustomActionButton";

class HomePage extends React.Component {

    constructor() {

        super()
        this.state = {
            totalCount: 0,
            readingCount: 0,
            readCount: 0,
            isAddNewBookVisible: false,
            textInputData: "",
            books: [],
        }
    }

    showAddNewBook = () => {
        this.setState({isAddNewBookVisible: true});
    }

    hideAddNewBook = () => {
        this.setState({isAddNewBookVisible: false});
    }

    addBook = (book) => {
        /*alert(this.state.textInputData);*/
        this.setState((state, props) => ({
            books: [...state.books, book],
            totalCount: state.totalCount + 1,
            readingCount: state.readingCount + 1,
        }), () => {
            console.log(this.state.books)
        });
    }

    markAsRead = (selectedBook, index) => {
        let newList = this.state.books.filter(book => book !== selectedBook)
        this.setState((prevState => ({
            books: newList,
            readCount: prevState.readCount + 1,
            readingCount: prevState.readingCount - 1,
        })))
    }

    renderItem = (item, index) => (
        <View style={{height: 50, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
                <Text>{item}</Text>
            </View>

            <CustomActionButton onPress={() => this.markAsRead(item, index)}
                                style={{
                                    width: 100,
                                    height: 50,
                                    backgroundColor: colors.stars,
                                    color: colors.white,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Mark as read</Text>
            </CustomActionButton>
        </View>
    );

    /*    markAsRead(item, index) {
            return undefined;
        }*/

    render() {
        return (
            <View style={{backgroundColor: colors.background}}>
                <SafeAreaView/>

                <View style={{
                    marginTop: 20, height: 70, borderBottomWidth: 0.5, borderBottomColor: colors.darkGray,
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{color: colors.white, fontSize: 24,}}>Book Worm</Text>
                </View>

                <View style={{height: 580}}>
                    {this.state.isAddNewBookVisible && (
                        <View style={{
                            height: 50,
                            flexDirection: 'row',
                            top: 20,
                            marginBottom: 20,
                            justifyContent: 'center'
                        }}>
                            <View style={{width: 250}}>
                                <TextInput
                                    style={{
                                        flex: 1,
                                        backgroundColor: colors.darkGray,
                                        borderRadius: 25,
                                        paddingLeft: 20,
                                        paddingRight: 10,
                                        color: colors.purple,
                                    }}
                                    placeholderTextColor={colors.purple} selectionColor={colors.purple}
                                    placeholder='Enter Book Name'
                                    onChangeText={(text) => this.setState({textInputData: text})}
                                />
                            </View>

                            <CustomActionButton onPress={() => this.addBook(this.state.textInputData)}>
                                <Ionicons name='ios-checkmark' size={30} color={colors.pink}/>
                            </CustomActionButton>

                            <CustomActionButton onPress={this.hideAddNewBook}>
                                <Ionicons name='ios-close' size={30} color={colors.purple}/>
                            </CustomActionButton>
                        </View>
                    )}

                    <FlatList data={this.state.books}
                              renderItem={({item}, index) => this.renderItem(item, index)}
                              keyExtractor={(item, index) => index.toString()}
                              ListEmptyComponent={
                                  <View style={{marginTop: 50, alignItems: 'center'}}>
                                      <Text style={{fontWeight: 'bold', color: 'white'}}>Not reading any books</Text>
                                  </View>
                              }
                    />

                    <CustomActionButton onPress={this.showAddNewBook}
                                        style={{position: 'absolute', bottom: 20, right: 20,}}>
                        <Button
                            title="+"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: colors.stars,
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 30,
                            }}
                            onPress={this.showAddNewBook}
                        />
                    </CustomActionButton>
                </View>

                <View style={{
                    height: 70, borderTopWidth: 0.5, borderTopColor: colors.darkGray,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <BookCount title="Total" count={this.state.totalCount}/>
                    <BookCount title="Reading" count={this.state.readingCount}/>
                    <BookCount title="Read" count={this.state.readCount}/>
                </View>
            </View>
        )
    }
}

export default HomePage
