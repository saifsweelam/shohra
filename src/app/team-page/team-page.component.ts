import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  team = [
    {
      name: 'سيف الدين سويلم',
      shortText: 'مطور مواقع شاب يتميز بإبداع الشباب ودقة الخبراء',
      longText: 'قام بالعمل على الكثير من المشاريع التي لا زالت تلمع اليوم على ساحة الإنترنت متفردة بتألقها',
      img: '/assets/person4.jpg'
    },
    {
      name: 'محمد طلعت',
      shortText: 'دكتور جامعي متخصص في علم التسويق الإلكتروني',
      longText: 'أحد أهم الكوادر في العالم العربي الذي خصص حياته لدراسة التسويق الإلكتروني والتفوق فيه',
      img: '/assets/person5.jpg'
    },
    {
      name: 'احمد عماد',
      shortText: 'مصمم جرافيك يدمج بين الإبداع والواقعية',
      longText: 'مصمم بدأ رحلته في سن شابة ليحتل عالم التصميم الرقمي ويفرض سيطرته على المجال بأسلوبه الخلاق',
      img: '/assets/person6.jpg'
    },
    {
      name: 'احمد بحيري',
      shortText: 'خبير في الحملات الممولة في شبكات التواصل الإجتماعي',
      longText: 'تتميز اعلاناته بارتفاع مدى تأثيرها واستهدافها للفئات المطلوبة وتحقيق أعلى عائد مادي',
      img: '/assets/person7.jpg'
    },
  ]
}
