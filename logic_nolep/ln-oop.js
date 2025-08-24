class Bank {
  constructor(bankName, member, platinum

  ) {
    this.bankName = bankName;
    // this.balance = member.balance;
    

  
  }
  register(person, memberType, nominal){
    if(memberType === "platinum"){
      if (nominal > Platinum.minimumBalance){
        balance += nominal;
        member.person = new Platinum()
        console.log(`Selamat datang ke ${bankName}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${platinum.balance}`)
      } else
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
    } else if(memberType === "silver"){
      if (nominal > Silver.minimumBalance){
        console.log(`Selamat datang ke ${bankName}, ${person.name}. Nomor Akun anda adalah ${accountNumber}. Total saldo adalah ${silver.balance}`)
      } else
        console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
   }
  }



class Person {
  constructor(name) {
    this.name = name;
    this.member = null;
  }
}

class Member {
  constructor(person, accountNumber) {
    this.memberName = person.name;
    this.accountNumber = accountNumber;
    this.transactions = [];
    
  }

  credit(nominal) {
    if (nominal < 50000) {
      console.log("Belum memenuhi minimal uang yang dapat disetor");
      return;
    }
    balance
    
  }

  debet(nominal, note) {
    if (nominal > balances) {
      console.info("Saldo anda tidak cukup");
    } else if (nominal - balance < 50000) {
      console.info("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi");
    }
  }

  transfer(){

  }

}

class Platinum extends Member {
  constructor(minimumBalance){
    super(memberName, accountNumber)
    this.minimumBalance = 50000;
    this.balance = 0;
    super(transactions)
    type = 'platinum';
  }
}

class Silver extends Member {
  constructor(){
    super(memberName, accountNumber)
    this.minimumBalance = 10000;
    this.balance = 0;
    super(transactions)
    type = 'silver';
  }
}

class Transaction {
  constructor(nominal, status, note){
    this.nominal = nominal;
    this.status = status;
    this.date = new Date();
    this.note = note;
  }
}
function generateId() {
  return Math.floor(Math.random() * 900000) + 100000;
}




// TESTCASE
// TIDAK BOLEH MENGUBAH CODE DI BAWAH INI

let yudhistiraBank = new Bank("Yudhistira Bank");
let nadia = new Person("Nadia");

yudhistiraBank.register(nadia, "platinum", 5000);
// Saldo awal kurang dari minimum saldo yang ditentukan
yudhistiraBank.register(nadia, "platinum", 54000);
//Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000

let nadiaAccount = nadia.bankAccount;

/* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
// nadiaAccount.credit(300000);
// // Anda sukses menyimpan uang ke dalam bank.

// nadiaAccount.credit(1000);
// // Belum memenuhi minimal uang yang dapat di setor

// nadiaAccount.debet(200000, "Beli Keyboard");
// // Anda sukses menarik uang dari bank

// nadiaAccount.debet(130000, "Beli Keyboard Lagi");
// // Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
// nadiaAccount.debet(600000, "Bisa gak ya lebih besar dari balance ? ");
// // Saldo anda tidak cukup

// let semmi = new Person("Semmi Verian");
// yudhistiraBank.register(semmi, "silver", 10000000);
// let semmiAccount = semmi.bankAccount;

// nadiaAccount.transfer(semmiAccount, 100000);
// // Anda sukses transfer ke Semmi Verian
// nadiaAccount.transfer(semmiAccount, 1000000);
// // Anda gagal transfer ke Semmi Verian

// console.log(semmiAccount);
// Silver {
//   memberName: 'Semmi Verian',
//   accountNumber: 1319650,
//   minimumBalance: 10000,
//   balance: 10100000,
//   transactions: [
//     Transaction {
//       nominal: 100000,
//       status: 'credit',
//       date: 2025-01-28T07:13:54.802Z,
//       note: 'transfer dari akun Nadia'
//     }
//   ],
//   type: 'silver'
// }

console.log(nadiaAccount);
// Platinum {
//   memberName: 'Nadia',
//   accountNumber: 3971487,
//   minimumBalance: 50000,
//   balance: 54000,
//   transactions: [
//     Transaction {
//       nominal: 300000,
//       status: 'credit',
//       date: 2025-01-28T07:13:54.800Z,
//       note: 'nyetor'
//     },
//     Transaction {
//       nominal: 200000,
//       status: 'debet',
//       date: 2025-01-28T07:13:54.801Z,
//       note: 'Beli Keyboard'
//     },
//     Transaction {
//       nominal: 100000,
//       status: 'debet',
//       date: 2025-01-28T07:13:54.802Z,
//       note: 'transfer ke akun Semmi Verian'
//     }
//   ],
//   type: 'platinum'
// }
