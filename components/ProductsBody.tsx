import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'twrnc';
import { Button, Menu, Divider, Provider as PaperProvider } from 'react-native-paper';

const ProductsBody: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const openMenu = (event: any) => {
    setMenuPosition({
      x: event.nativeEvent.pageX -10,
      y: event.nativeEvent.pageY - 200
    });
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <ScrollView style={tailwind.style('flex-1')}>
        {/* First Card */}
        <View style={tailwind.style('flex-1 pt-3 px-4 relative')}>
          <View style={tailwind.style('border-t border-b border-[#DFDFDF] h-[124px] flex-row justify-between items-center')}>
            <Image
              source={require('@/assets/images/photo-5.jpeg')}
              style={tailwind.style('w-[80px] h-[80px] rounded-full border-2 border-[#959595]', { objectFit: 'cover' })}
            />
            <View style={tailwind.style('flex-1 ml-4 h-full justify-center')}>
              <View style={tailwind.style('flex-row justify-between items-center')}>
                <View style={tailwind.style('flex-row items-center')}>
                  <Image
                    source={require('@/assets/images/frame-3.png')}
                    style={tailwind.style('w-[15px] h-[15px] mr-2', { objectFit: 'cover' })}
                  />
                  <Text style={tailwind.style('font-semibold text-[#00A6FB] underline')}>Noodles</Text>
                </View>
                <Text style={tailwind.style('px-6 py-1.5 text-xs font-semibold rounded-[10px] bg-[#CCEBFF]')}>Indomie</Text>
                <TouchableOpacity onPress={openMenu}>
                  <Image
                    source={require('@/assets/images/frame-4.png')}
                    style={tailwind.style('mr-4', { objectFit: 'cover' })}
                  />
                </TouchableOpacity>
              </View>
              <View style={tailwind.style('flex-row items-center mt-3')}>
                <Text style={tailwind.style('text-gray-600')}> Per piece </Text>
                <Text style={tailwind.style('font-bold ml-3')}>₦  200</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Second Card */}
        <View style={tailwind.style('flex-1 pt-3 px-4 relative')}>
          <View style={tailwind.style('border-t border-b border-[#DFDFDF] h-[124px] flex-row justify-between items-center')}>
            <Image
              source={require('@/assets/images/photo-4.jpeg')}
              style={tailwind.style('w-[80px] h-[80px] rounded-full border-2 border-[#959595]', { objectFit: 'cover' })}
            />
            <View style={tailwind.style('flex-1 ml-4 h-full justify-center')}>
              <View style={tailwind.style('flex-row justify-between items-center')}>
                <View style={tailwind.style('flex-row items-center')}>
                  <Image
                    source={require('@/assets/images/frame-3.png')}
                    style={tailwind.style('w-[15px] h-[15px] mr-2', { objectFit: 'cover' })}
                  />
                  <Text style={tailwind.style('font-semibold text-[#00A6FB] underline')}>Rice</Text>
                </View>
                <Text style={tailwind.style('px-2 py-1.5 text-xs font-semibold rounded-[10px] bg-[#E3E3E3]')}>Multiple brands</Text>
                <TouchableOpacity onPress={openMenu}>
                  <Image
                    source={require('@/assets/images/frame-4.png')}
                    style={tailwind.style('mr-4', { objectFit: 'cover' })}
                  />
                </TouchableOpacity>
              </View>
              <View style={tailwind.style('flex-row items-center mt-3')}>
                <Text style={tailwind.style('text-gray-600')}> Per piece </Text>
                <Text style={tailwind.style('font-bold ml-3')}>₦  200</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Third Card */}
        <View style={tailwind.style('flex-1 pt-3 px-4 relative')}>
          <View style={tailwind.style('border-t border-b border-[#DFDFDF] h-[124px] flex-row justify-between items-center')}>
            <Image
              source={require('@/assets/images/photo-3.png')}
              style={tailwind.style('w-[80px] h-[80px] rounded-full border-2 border-[#959595]', { objectFit: 'cover' })}
            />
            <View style={tailwind.style('flex-1 ml-4 h-full justify-center')}>
              <View style={tailwind.style('flex-row justify-between items-center')}>
                <View style={tailwind.style('flex-row items-center')}>
                  <Image
                    source={require('@/assets/images/photo-4.jpeg')}
                    style={tailwind.style('w-[15px] h-[15px] mr-2', { objectFit: 'cover' })}
                  />
                  <Text style={tailwind.style('font-semibold text-[#00A6FB] underline')}>Spaghetti</Text>
                </View>
                <Text style={tailwind.style('px-2 py-1.5 text-xs font-semibold rounded-[10px] bg-[#CCEBFF]')}>Golden penny</Text>
                <TouchableOpacity onPress={openMenu}>
                  <Image
                    source={require('@/assets/images/frame-4.png')}
                    style={tailwind.style('mr-4', { objectFit: 'cover' })}
                  />
                </TouchableOpacity>
              </View>
              <View style={tailwind.style('flex-row items-center mt-3')}>
                <Text style={tailwind.style('text-gray-600')}> Per piece </Text>
                <Text style={tailwind.style('font-bold ml-3')}>₦  200</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Fourth Card */}
        <View style={tailwind.style('flex-1 pt-3 px-4 relative')}>
          <View style={tailwind.style('border-t border-b border-[#DFDFDF] h-[124px] flex-row justify-between items-center')}>
            <Image
              source={require('@/assets/images/photo-2.png')}
              style={tailwind.style('w-[80px] h-[80px] rounded-full border-2 border-[#959595]', { objectFit: 'cover' })}
            />
            <View style={tailwind.style('flex-1 ml-4 h-full justify-center')}>
              <View style={tailwind.style('flex-row justify-between items-center')}>
                <View style={tailwind.style('flex-row items-center')}>
                  <Image
                    source={require('@/assets/images/frame-3.png')}
                    style={tailwind.style('w-[15px] h-[15px] mr-2', { objectFit: 'cover' })}
                  />
                  <Text style={tailwind.style('font-semibold text-[#00A6FB] underline')}>Toothpaste</Text>
                </View>
                <Text style={tailwind.style('px-2 py-1.5 text-xs font-semibold rounded-[10px] bg-[#E3E3E3]')}>Multiple brands</Text>
                <TouchableOpacity onPress={openMenu}>
                  <Image
                    source={require('@/assets/images/frame-4.png')}
                    style={tailwind.style('mr-4', { objectFit: 'cover' })}
                  />
                </TouchableOpacity>
              </View>
              <View style={tailwind.style('flex-row items-center mt-3')}>
                <Text style={tailwind.style('text-gray-600')}> Per piece </Text>
                <Text style={tailwind.style('font-bold ml-3')}>₦  200</Text>
              </View>
            </View>
          </View>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={{ x: menuPosition.x, y: menuPosition.y }}
          style={{ backgroundColor: 'white' }}
        >
          <Menu.Item leadingIcon={require('@/assets/images/edit-2.png')} onPress={() => {}} title="Edit stock" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon={require('@/assets/images/person.png')}  onPress={() => {}} title="Supplier" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon={require('@/assets/images/export.png')}  onPress={() => {}} title="Export" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Duplicate" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon={require('@/assets/images/share.png')} onPress={() => {}} title="Share" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon={require('@/assets/images/history.png')} onPress={() => {}} title="History" style={tailwind.style('bg-white pr-14 py-3')}/>
          <Menu.Item leadingIcon={require('@/assets/images/delete.png')} onPress={() => {}} title="Delete" style={tailwind.style('bg-white pr-14 py-3')} />
        </Menu>
      </ScrollView>
    </PaperProvider>
  );
};

export default ProductsBody;
