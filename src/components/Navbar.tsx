import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (route.name === 'Home') {
        // ถ้าอยู่หน้า Home แล้วกดย้อนกลับ
        e.preventDefault(); // ป้องกันไม่ให้ย้อนกลับ
        navigation.navigate('Home' as never); 
      } else {
        // ถ้าไม่ใช่หน้า Home ป้องกันการย้อนกลับและกลับไปหน้า Home
        e.preventDefault();
        navigation.navigate('Home' as never);
      }
    });

    return unsubscribe;
  }, [navigation, route]);

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
    backgroundColor: '#2C3E50',
    paddingVertical: 2,
    paddingBottom: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 20,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconWrapper: {
    backgroundColor: '#1ABC9C',
    padding: 10,
    borderRadius: 25,
    transform: [{ translateY: -8 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  activeNavItem: {
    transform: [{ translateY: -6 }],
  },
});

export default Navbar;
