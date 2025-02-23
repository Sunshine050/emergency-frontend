import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.navbar}>
      {['Home', 'SOS', 'Nearby', 'Profile'].map((screen) => {
        const isActive = route.name === screen;
        return (
          <TouchableOpacity
            key={screen}
            onPress={() => navigation.navigate(screen as never)}
            style={[styles.navItem, isActive && styles.activeNavItem]}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
              <FontAwesome
                name={getIconName(screen)}
                size={26}
                color={isActive ? '#fff' : '#bbb'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getIconName = (screen: string) => {
  switch (screen) {
    case 'Home': return 'home';
    case 'SOS': return 'warning';
    case 'Nearby': return 'search';
    case 'Profile': return 'user';
    default: return 'circle';
  }
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C3E50', // สีเทาเข้ม
    paddingVertical: 2,
    paddingBottom: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, // มุมโค้ง
    elevation: 20, // เงา
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 50, // กำหนดขนาดให้เท่ากัน
    height: 50, // กำหนดขนาดให้เท่ากัน
    borderRadius: 25, // ทำให้เป็นวงกลม
    backgroundColor: '#2C3E50', // สีพื้นหลัง
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconWrapper: {
    backgroundColor: '#1ABC9C', // สีเมื่อปุ่มถูกเลือก
    padding: 10, // ลดขนาด padding ให้เหมาะสม
    borderRadius: 25, // รูปวงกลม
    transform: [{ translateY: -8 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6, // เงาที่เด่นขึ้น
  },
  activeNavItem: {
    transform: [{ translateY: -6 }],
  },
});

export default Navbar;
