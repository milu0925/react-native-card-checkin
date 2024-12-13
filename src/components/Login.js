import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Login() {
  const [datas, setDatas] = useState({email: '', password: ''});
  const [error, setError] = useState({emailError: '', passwordError: ''});
  const handleChange = (name, value) => {
    let emailRegex = /^[A-Za-z0-9._%+-]/;
    let passwordRegex = /^[A-Za-z0-9]*$/;

    if (name === 'email') {
      if (emailRegex.test(value)) {
        setError(prev => ({...prev, emailError: ''}));
        setDatas(prev => ({...prev, email: value}));
      } else {
        setError(prev => ({...prev, emailError: '請輸入有效帳號'}));
      }
    }

    if (name === 'password') {
      if (passwordRegex.test(value)) {
        setError(prev => ({...prev, passwordError: ''}));
        setDatas(prev => ({...prev, password: value}));
      } else {
        setError(prev => ({
          ...prev,
          passwordError: '密碼只能包含英文、數字',
        }));
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const [isValid, setIsValid] = useState(true);
  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
      setIsValid(true);
      alert('表單提交成功');
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>
            Email:
            <Text style={styles.error}>
              　{error.emailError && `(${error.emailError})`}
            </Text>
          </Text>
          <TextInput
            style={styles.input}
            name="email"
            value={datas.Buttonemail}
            onChangeText={value => handleChange('email', value)}
            placeholder="請輸入信箱"
            placeholderTextColor="#BEBEBE"
          />
        </View>

        <View style={styles.block}>
          <Text>
            Password:
            <Text style={styles.error}>
              　{error.passwordError && `(${error.passwordError})`}
            </Text>
          </Text>
          <TextInput
            style={styles.input}
            name="password"
            value={datas.password}
            onChangeText={value => handleChange('password', value)}
            secureTextEntry={!showPassword}
            placeholder="請輸入密碼"
            placeholderTextColor="#BEBEBE"
          />
          <TouchableOpacity
            style={styles.eyes}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? (
              <Icon name="eye" size={30} color="#3D476A" />
            ) : (
              <Icon name="eye-slash" size={30} color="#BEBEBE" />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginbtn} onPress={handleSubmit}>
          <Text style={styles.logintext}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 250,
  },
  content: {width: width - 50, paddingInline: 25},
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingInline: 12,
    marginBottom: 60,
    color: '#000',
  },
  loginbtn: {
    backgroundColor: '#2E354F',
    borderRadius: 6,
    padding: 16,
  },
  logintext: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },

  block: {
    position: 'relative',
  },
  eyes: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 55,
    right: 0,
  },
});
